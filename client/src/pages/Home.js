import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "../Assets/styles/home.scss";
import { Container, CardColumns, Card, Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { REMOVE_HIKE } from "../utils/mutations";
import { removeHikeId } from "../utils/localStorage";

const Home = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  const [removeHike, { error }] = useMutation(REMOVE_HIKE);

  const handleDeleteHike = async (trailId) => {
    try {
      // this is where we use the REMOVE_trail mutation
      await removeHike({
        variables: { trailId }
      });

      if (error) {
        throw new Error("something went wrong!");
      }

      // upon success, remove trail's id from localStorage
      removeHikeId(trailId);
    } catch (err) {
      console.error(err);
    }
  };
  // if data isn't here yet, say so
  if (loading) {
    return <h2>STILL LOADING...</h2>;
  }
  return (
    <>
      <NavBar />
      <div className="home-page-container">
        <Container>
          <h2 className="text-white pt-4">{`${userData.firstName}`}'s completed hikes</h2>
          <CardColumns className="mt-4">
            {userData.hiked.map((hike) => {
              return (
                <Card key={hike._id} border="dark">
                  {hike.img ? (
                    <Card.Img
                      src={hike.img}
                      alt={`The cover for ${hike.title}`}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>
                      <a
                        href={hike.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {hike.name}
                      </a>
                    </Card.Title>
                    <Card.Text>Length: {hike.length} mi</Card.Text>
                    <Button
                      className="btn-block btn-danger"
                      onClick={() => handleDeleteHike(hike.trailId)}
                    >
                      Delete This Hike!
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
