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
import javascriptCert from "../assets/img/javascript-cert.png"
import hackerrankProb from "../assets/img/hakerrankpromblemsolving.png"
import mediumBlogs from "../assets/img/mediumblogs.png"
import classQuery from "../assets/img/classquery.png"

export const Projects = () => {

  const projects = [
    {
      title: "ClassQuery: App for Teachers to post assignments and students ask/answer questions, with some AI features",
      description: "Tech Used: Java SpringBoot, React, H2 Db, OpenAI, Docker, Jmeter, Cypress, AWS EC2",
      imgUrl: "http://3.134.232.108:3681/timeline",
      img:classQuery
    },
    {
      title: "Spark: An AI Featured Twitter clone",
      description: "Tech Used: Java SpringBoot, React, H2 Db, OpenAI, Docker, AWS S3 Bucket, AWS EC2",
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
      title: "HackerRank React Developer Certificate",
      description: "",
      imgUrl: "https://www.hackerrank.com/certificates/242058ed99e7",
      img:reaactHacker
    },
    {
      title: "HackerRank Problem Solving Data Structures and Algorithms Certificate",
      description: "",
      imgUrl: "https://www.hackerrank.com/certificates/d3de0012acbd",
      img:hackerrankProb
    },
    {
      title: "Javascript Certificate",
      description: "Course covers over 90 lessons: Strings, Numbers, Arrays, Objects, Functions, Prototypical inheritance, JSON, Promises, Fetch, Events, async/await, DOM, Web Components and projects.",
      imgUrl: "https://res.cloudinary.com/dbfn5lnvx/image/authenticated/s--CaGk2bbh--/v1684977725/certificates/javascript/mohammednaser-4586.pdf",
      img:javascriptCert
    }
  ];

  const blogs = [
    {
      title: "Medium technical blogs",
      description: "Click here to read some of my articles and blogs!",
      imgUrl: "https://medium.com/@mnaser11218",
      img:mediumBlogs
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
                    Latest Project that I've built, Class Query: 
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
                    Click on Certificate title for Certificate credentials
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
                    Click on Title to read some of the articles, tutorials and blogs I've authored on Medium!
                      <Row>
                        
                        {
                          blogs.map((project, index) => {
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