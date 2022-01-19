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

      <div className="stats-container">
        <div className="stats-module-container">
          <div className="stats-module-title">134.7%</div>
          <div className="stats-module-subtitle">more hikers than 2019</div>
          <div className="stats-module-text">
            More and more people are getting outdoors and finding an adventure.
          </div>
        </div>
        <div className="stats-module-container">
          <div className="stats-module-title">57 mil</div>
          <div className="stats-module-subtitle">fellow hikers</div>
          <div className="stats-module-text">
            Share your adventures and learn from our global community
          </div>
        </div>
        <div className="stats-module-container">
          <div className="stats-module-title">550 cal</div>
          <div className="stats-module-subtitle">burned hiking an hour</div>
          <div className="stats-module-text">
            Rev up your aerobic activity with easy to challenging trails.
          </div>
        </div>
      </div>
      <div className="picture-container">
        <div className="picture-content-container">
          <h1 className="picture-content-titleTop">Find your trail</h1>
          <h1 className="picture-content-titleBottom">with ease</h1>
          <p className="picture-content-text">
            Let us guide you wherever the trail will go.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
