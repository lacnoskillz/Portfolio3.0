import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  //selectError,
  //selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
//import { filteredProjects } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, 
  //Loading 
} from "./globalStyledComponents";
import StyledCard from "./StyledCard";
//app screen shots
import note from "../images/noteSS.png"
import book from "../images/BookSS.png"
import weather from "../images/weatherSS.png"
import dog from "../images/doggydazeSS.png"
import movie from "../images/movienightSS.png"
import beans from "../images/coolbeansSS.png"
export default function Projects() {
  //const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
  //const isLoading = useSelector(selectIsLoading);
  //const error = useSelector(selectError);
  const data = useSelector(selectData);

  // React.useEffect(
  //   function () {
  //     const tempData = [];
  //     data.forEach((el, i) => (tempData[i] = Object.create(el)));
  //     if (data.length !== 0 && filteredProjects.length !== 0) {
  //       const tempArray = tempData.filter((obj) =>
  //         filteredProjects.includes(obj.name)
  //       );
  //       tempArray.length !== 0
  //         ? setMainProjects([...tempArray])
  //         : setMainProjects([...tempData.slice(0, 3)]);
  //     } else {
  //       setMainProjects([...tempData.slice(0, 3)]);
  //     }
  //   },
  //   [data]
  // );

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
            
          </Container>
        
         
          
            
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                
                   
                    <Col key="1">
                      <StyledCard
                        image={beans}
                        name="Cool-Beans"
                        description="Coffee E-commerce website for coffee lovers using MERN stack with Stripepayment API, reacaptcha formspree and Bootstrap"
                        url="https://github.com/hmustain/Cool-Beans"
                        demo="https://cool-beans-ecommerce.herokuapp.com/"
                      />
                    </Col>
                    <Col key="2">
                      <StyledCard
                        image={movie}
                        name="Movie-Night"
                        description="app to search and find details on movies. Using OMDB API, Youtube API and Tailwind CSS"
                        url="https://github.com/calebcarnett/Movie-Night"
                        demo="https://calebcarnett.github.io/Movie-Night/"
                      />
                    </Col>
                    <Col key="3">
                      <StyledCard
                        image={dog}
                        name="Doggydaze"
                        description="app to find establishments for you and your dog! Using Express, MySQL, express-handle-bars, recaptcha API and google maps API"
                        url="https://github.com/RosalvaMartinez/doggydaze"
                        demo="https://ancient-plains-63296.herokuapp.com/"
                      />
                    </Col>
                    <Col key="4">
                      <StyledCard
                        image={weather}
                        name="Kaikanes-weather-dashboard"
                        description="App that uses weather api to get weather on searched city. Using custom CSS, HTML and javascript"
                        url="https://github.com/lacnoskillz/Kaikanes-weather-dashboard"
                        demo="https://lacnoskillz.github.io/Kaikanes-weather-dashboard/"
                      />
                    </Col>
                    <Col key="5">
                      <StyledCard
                        image={book}
                        name="Kaikanes-Book-Search"
                        description="This Book search website allows users to save the books they love so they can later purchase and read them. uses google books API, React, Bootstrap, GraphQL"
                        url="https://github.com/lacnoskillz/Kaikanes-Book-Search"
                        demo="https://powerful-oasis-33417.herokuapp.com/"
                      />
                    </Col>
                    <Col key="6">
                      <StyledCard
                        image={note}
                        name="Kaikanes-buisness-note-taker"
                        description="This is application was created to easily create notes. it uses Nodemon, Express4.17.1, heroku"
                        url="https://github.com/lacnoskillz/Kaikanes-buisness-note-taker"
                        demo="https://kaikanes-buisness-note-taker.herokuapp.com/"
                      />
                    </Col>
                  
                
              </Row>
              {data.length > 3 && (
                <Container className="text-center mt-5">
                  <Link to="/All-Projects">
                    <Button
                      size="lg"
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      All <Icon icon="icomoon-free:github" /> Projects
                    </Button>
                  </Link>
                </Container>
              )}
            
          
        </Container>
      </section>
    </Element>
  );
}
