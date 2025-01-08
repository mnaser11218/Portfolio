import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import spark from '../assets/img/Spark.png'
import techReads from '../assets/img/techLibrary.png'
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import dictionary_app from "../assets/img/dictionary_app.png"
import gameSimulation from "../assets/img/gameSimulation.png"
import casino from "../assets/img/casino.gif"
import casino2 from "../assets/img/casino2.png"
import personTracker from "../assets/img/ReadPerson2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import zipcodeCertificate from "../assets/img/zipcode2.png"
import reactTutorial from "../assets/img/react-tutorial.png"
import reaactHacker from "../assets/img/hackerranker-react.png"
export const Projects = () => {

  const projects = [
    {
      title: "Spark: An AI Featured Twitter clone",
      description: "Tech Used: Java SpringBoot, React, H2 Db, OpenAI, Docker, AWS S3 Bucket, AWS EC2",
      imgUrl: "http://3.134.232.108:3681/timeline",
      img:spark
    },
    {
      title: "ClassQuery: Teachers post assignments and students ask and answer questions, with AI features",
      description: "Tech Used: Java SpringBoot, React, H2 Db, OpenAI, Docker, Jmeter, Cypress, AWS EC2",
      imgUrl: "http://3.134.232.108:3681/timeline",
      img:spark
    },
    {
      title: "Tech-Reads: A tech bookstore app clone",
      description: "Tech used: React, Vite, HTML, TailWind CSS",
      imgUrl: "https://main.d3t1bpwt79txk6.amplifyapp.com",
      img:techReads
    },
    {
      title: "Dictionary_Typescript",
      description: "Tech used: Typescript, Javascript, HTML, CSS",
      imgUrl: "https://github.com/mnaser11218/DictionaryApp",
      img:dictionary_app
    },
    {
      title: "Arcade Simulation",
      description: "Java Game Simuation: BeatTheDealer, BlackJack, Keno, Rouletto, Slots, NumberGuess",
      imgUrl: "https://github.com/mnaser11218/GroupCasino",
      img:casino2
    },
    {
      title: "Fullstack Person tracker: create, track, update, delete person records application",
      description: "Tech used: Java Spring Boot, H2, JPA, Javascript, Axios, HTML, CSS, and Jmeter for stress testing.",
      imgUrl: "https://fullstackspringcrudapp.onrender.com/",
      img:personTracker
    },
  ];

  const certificates = [
    {
      title: "Zipcode Wilmington",
      description: "Graduated from Zipcode Wilmington full stack bootcamp",
      imgUrl: "https://credsverse.com/credentials/77738f25-3073-42d2-a5ce-b9346eece245?preview=1",
      img:zipcodeCertificate
    },
    {
      title: "Tech Elevator",
      description: "Graduated from tech elevator ... ",
      imgUrl: "https://main.d3t1bpwt79txk6.amplifyapp.com",
      img:techReads
    },
    {
      title: "React Tutorial",
      description: "The course includes 90 in-depth lessons covering essential React concepts such as: React State, Props, Effects, Custom Hooks (useState, useEffect, useFetch, useParams, useContext, and more), Components, localStorage, ReactDOM, advanced React Router, Context, APIs, Accessibility, Error Handling, Testing, and several React-based projects.",
      imgUrl: "https://res.cloudinary.com/dbfn5lnvx/image/authenticated/s--_UBwapTV--/v1728525288/certificates/react/mohammednaser-2142.pdf",
      img:reactTutorial
    },
    {
      title: "HackerRank React Certificate",
      description: "",
      imgUrl: "https://www.hackerrank.com/certificates/242058ed99e7",
      img:reaactHacker
    },
    {
      title: "Fullstack Person tracker: create, track, update, delete person records application",
      description: "Tech used: Java Spring Boot, H2, JPA, Javascript, Axios, HTML, CSS, and Jmeter for stress testing.",
      imgUrl: "https://www.hackerrank.com/certificates/242058ed99e7",
      img:personTracker
    }, {
      title: "ClassQuery: Teachers post assignments and students ask and answer questions, with AI features",
      description: "Tech Used: Java SpringBoot, React, H2 Db, OpenAI, Docker, Jmeter, Cypress, AWS EC2",
      imgUrl: "http://3.134.232.108:3681/timeline",
      img:spark
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Technical Certificates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Blogs written</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    Click on Project title to see Project live
                      <Row>
                        
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    Click on Certificate title to see Certificate credentials
                      <Row>
                        
                        {
                          certificates.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    Click on Project title to see Project live
                      <Row>
                        
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}