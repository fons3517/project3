import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns
} from "react-bootstrap";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { locationApi } from "../utils/API";
import { searchTrailApi } from "../utils/API";
//import Auth from "../utils/auth";
// dont know name of API search variable, we will need to revisit this
// import { searchHikingTrails } from "../utils/API";
// // don't know what we are calling these yet, will need to revisit to confirm naming conventions
// import { saveTrailIds, getSavedTrailIds } from "../utils/localStorage";
// import { useMutation } from "../utils/mutations";
// import { SAVE_TRAIL } from "../utils/mutations";
// import "../Assets/styles/findahike.scss";

const FindAHike = () => {
  // create state for holding returned api data
  const [searchedTrails, setSearchedTrails] = useState([]);
  //create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  //create state to hold save trailId values
  //const [savedTrailIds, setSavedTrailIds] = useState(getSavedTrailIds());

  //const [saveTrail, { error }] = useMutation(SAVE_TRAIL);

  // set up useEffect hook to save `savedTrailIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  //useEffect(() => {
  //return () => saveTrailIds(savedTrailIds);
  //});

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

      const location= await responseLocation.json();
      console.log(location);
      const latLocation = location.coord["lat"];
      const lonLocation = location.coord["lon"];

      const response = await searchTrailApi(latLocation, lonLocation);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const itemsObj= await response.json();
      const items = itemsObj.data
      const trailData = items.map((trail) => ({
        // This would need to be reviewed for proper naming constructs
        trailId: trail.id,
        name: trail.name,
        description: trail.description,
        directions: trail.directions,
        difficulty: trail.difficulty,
        length: trail.length,
        rating: trail.rating,
        url: trail.url,
        img: trail.thumbnail
      }));

      setSearchedTrails(trailData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  // const handleSaveTrail = async (trailId) => {
  //   // find the book in `searchedTrails` state by the matching id
  //   const trailToSave = searchedTrails.find(
  //     (trail) => trail.trailId === trailId
  //   );

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     // SAVE_BOOK mutation gets used here
  //     await saveTrail({
  //       variables: { input: trailToSave },
  //     });

  //     if (error) {
  //       throw new Error("something went wrong!");
  //     }

  //     // if book successfully saves to user's account, save book id to state
  //     setSavedTrailIds([...savedTrailIds, trailToSave.bookId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //};

  return (
    <>
      <NavBar />
      <Jumbotron fluid className="text-light bg-dark">
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

      <Container>
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
                  <Card.Text>Description: {trail.description}</Card.Text>
                  <Card.Text>Length: {trail.length}</Card.Text>
                  <Card.Text>Rating: {trail.rating}</Card.Text>
                  <Card.Text>Difficulty: {trail.difficulty}</Card.Text>
                  <Card.Text>Directions: {trail.directions}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
      <Footer />
    </>
  );
};

export default FindAHike;
