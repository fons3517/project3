import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "../Assets/styles/home.scss";
import { Container, CardColumns, Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

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
