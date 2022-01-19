import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { removeTrailId } from "../utils/localStorage";
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_TRAIL } from "../utils/mutations";
import { GET_ME } from "../utils/queries";

const SavedTrails = () => {
  const [removeTrail, { error }] = useMutation(REMOVE_TRAIL);
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  // create function that accepts the trail's mongo _id value as param and deletes the trail from the database
  const handleDeleteTrail = async (trailId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // this is where we use the REMOVE_trail mutation
      await removeTrail({
        variables: { trailId },
      });

      if (error) {
        throw new Error("something went wrong!");
      }

      // upon success, remove trail's id from localStorage
      removeTrailId(trailId);
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

  // if data isn't here yet, say so
  if (loading) {
    return <h2>STILL LOADING...</h2>;
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
          <h1>Here's your saved trails!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.trails.length
            ? `Viewing ${userData.trails.length} saved ${
                userData.trails.length === 1 ? "trail" : "trails"
              }:`
            : "You have no saved trails!"}
        </h2>
        <CardColumns>
          {userData.trails.map((trail) => {
            return (
              <Card key={trail.trailId} border="dark">
                {trail.img ? (
                  <Card.Img
                    src={trail.img}
                    alt={`The cover for ${trail.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>
                    <a
                      href={trail.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                  </Card.Text>{" "}
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteTrail(trail.trailId)}
                  >
                    Delete This Trail!
                  </Button>
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

export default SavedTrails;
