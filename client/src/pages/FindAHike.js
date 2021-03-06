import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import { locationApi } from "../utils/API";
import { searchTrailApi } from "../utils/API";
import Auth from "../utils/auth";
import { saveTrailIds, getSavedTrailIds } from "../utils/localStorage";
import { useMutation } from "@apollo/client";
import { SAVE_TRAIL } from "../utils/mutations";
import "../Assets/styles/findahike.scss";

const FindAHike = () => {
  // create state for holding returned api data
  const [searchedTrails, setSearchedTrails] = useState([]);
  //create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  //create state to hold save trailId values
  const [savedTrailIds, setSavedTrailIds] = useState(getSavedTrailIds());

  const [saveTrail, { error }] = useMutation(SAVE_TRAIL);

  // set up useEffect hook to save `savedTrailIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveTrailIds(savedTrailIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const responseLocation = await locationApi(searchInput);
      if (!responseLocation.ok) {
        throw new Error("something went wrong!");
      }

      const location = await responseLocation.json();
      console.log(location);
      const latLocation = location.coord["lat"];
      const lonLocation = location.coord["lon"];

      const response = await searchTrailApi(latLocation, lonLocation);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const itemsObj = await response.json();
      const items = itemsObj.data;
      const trailData = items.map((trail) => ({
        // This would need to be reviewed for proper naming constructs
        trailId: trail.id,
        name: trail.name,
        description: trail.description,
        directions: trail.directions,
        difficulty: trail.difficulty,
        length: trail.length,
        rating: Math.round(trail.rating),
        url: trail.url,
        img: trail.thumbnail,
      }));

      setSearchedTrails(trailData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a trail to our database
  const handleSaveTrail = async (trailId) => {
    console.log(trailId);
    // find the trail in `searchedTrails` state by the matching id
    const trailToSave = searchedTrails.find(
      (trail) => trail.trailId === trailId
    );
    console.log(trailToSave);
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(trailToSave);
    if (!token) {
      return false;
    }

    try {
      const { data } = await saveTrail({
        variables: { input: trailToSave },
      });
      if (error) {
        console.log("error");
        throw new Error("Something went wrong!");
      }

      console.log("trails:", data);
      // if trail successfully saves to user's account, save book id to state
      setSavedTrailIds([...savedTrailIds, trailToSave.trailId]);
    } catch (err) {
      console.error(err);
    }
  };
  // remove the <br /> from description and direction from the trail information
  function removeBr(info) {
    let firstSplit = info.split("<br />");
    let firstJoin = firstSplit.join("");
    let secondSplit = firstJoin.split("  ");
    let secondJoin = secondSplit.join("");
    return secondJoin;
  }

  return (
    <>
      <NavBar />
      <Jumbotron
        fluid
        className="text-light"
        style={{ backgroundColor: "#fff8ed" }}
      >
        <Container>
          <h1>Search For Trails To Hike!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Enter A City"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <div className="search-page-container mt-0">
        <div className="search-hike-container justify-content-center">
          <div className="jumbo-text p-5 m-5 col-xl">
            <h2>
              {searchedTrails.length
                ? `Viewing ${searchedTrails.length} results:`
                : "Search for a trail to begin"}
            </h2>

            <CardColumns>
              {searchedTrails.map((trail) => {
                return (
                  <Card key={trail.trailId} border="dark">
                    {trail.img ? (
                      <Card.Img
                        src={trail.img}
                        alt={`The picture for ${trail.name}`}
                        variant="top"
                      />
                    ) : null}
                    <Card.Body>
                      <Card.Title>
                        <a href={trail.url} target="_blank" rel="noreferrer">
                          {trail.name}
                        </a>
                      </Card.Title>
                      <Card.Text>
                        Description: {removeBr(trail.description)}
                      </Card.Text>
                      <Card.Text>Length: {trail.length}</Card.Text>
                      <Card.Text>Rating: {trail.rating}</Card.Text>
                      <Card.Text>Difficulty: {trail.difficulty}</Card.Text>
                      <Card.Text>
                        Directions: {removeBr(trail.directions)}
                      </Card.Text>
                      {Auth.loggedIn() && (
                        <Button
                          disabled={savedTrailIds?.some(
                            (savedTrailId) => savedTrailId === trail.trailId
                          )}
                          className="btn-block btn-info"
                          onClick={() => handleSaveTrail(trail.trailId)}
                        >
                          {savedTrailIds?.some(
                            (savedTrailId) => savedTrailId === trail.trailId
                          )
                            ? "This trail has been saved!"
                            : "Save this Trail!"}
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                );
              })}
            </CardColumns>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindAHike;
