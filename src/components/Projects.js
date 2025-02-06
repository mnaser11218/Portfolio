import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import spark from '../assets/img/Spark.png'
import techReads from '../assets/img/techLibrary.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import casino2 from "../assets/img/casino2.png"
import personTracker from "../assets/img/ReadPerson2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import zipcodeCertificate from "../assets/img/zipcode2.png"
import reactTutorial from "../assets/img/react-tutorial.png"
import reaactHacker from "../assets/img/hackerranker-react.png"
import dictionary_app from '../assets/img/dictionaryRecipe.png'
import classQuery from "../assets/img/classquery.png"
import fullstackArticle from "../assets/img/fullstackart.png"
import techElevator from "../assets/img/techelevator.jpg"
import openAIBlog from "../assets/img/openAI-blog.png"
import blogAWS from "../assets/img/blogaws.png"
import leonCertificate from "../assets/img/leon.png"
import reactDom from "../assets/img/reactDomArticle.png"
import cypress from '../assets/img/cypress2.png'
export const Projects = () => {

  const projects = [
   
    {
      title: "Spark: An AI Featured Twitter clone",
      description: "Tech Used: Java SpringBoot, React, H2 Db, OpenAI, Docker, AWS S3 Bucket, AWS EC2",
      imgUrl: "http://3.134.232.108:3681",
      img:spark
    },
    {
      title: "ClassQuery: App for Teachers to post assignments and students ask/answer questions, with additional AI features",
      description: "Tech Used: Java SpringBoot, React, H2 Db, OpenAI, Docker, Jmeter, Cypress",
      imgUrl: "https://github.com/mnaser11218/ClassQuery",
      img:classQuery
    },
    {
      title: "Dictionary_Typescript",
      description: "Tech used: Typescript, Javascript, HTML, CSS",
      imgUrl: "https://dictionary-app-roan-rho.vercel.app/",
      img:dictionary_app
    },
    
    {
      title: "Tech-Reads: A tech bookstore app clone",
      description: "Tech used: React, Vite, HTML, TailWind CSS",
      imgUrl: "https://tech-reads-three.vercel.app/",
      img:techReads
    },
    {
      title: "Cypress Automation E2E/API Testing",
      description: "Cypress methods implemented: intercepts, fixtures, assertions, mocking API response, headless authorization",
      imgUrl: "https://github.com/mnaser11218/ApiTestingCypress",
      img:cypress
    },
    {
      title: "Java Arcade Simulation: BeatTheDealer, BlackJack, Keno, Rouletto, Slots, NumberGuess",
      description: "Java: Dependency Injection, Abstract classes, Interfaces, Inheritance, Polymorphism, Exception Handling, Randomization, Collections, File I/O, and UI Design.",
      imgUrl: "https://github.com/mnaser11218/GroupCasino",
      img:casino2
    },
    {
      title: "CRUD_SpringBootApp: FullStack app to track Person records application",
      description: "Tech used: Java Spring Boot, H2, JPA, Javascript, Axios, HTML, CSS, and Jmeter for stress testing.",
      imgUrl: "https://github.com/mnaser11218/StringBootFullStackApp",
      img:personTracker
    },
   
    
  ];

  const certificates = [
    {
      title: "Zipcode Wilmington",
      description: "Graduated from Zip Code Wilmington’s highly competitive software development program accepting less than 7% of applicants; completed over 1000 hours of software development projects in an immersive, full-stack training program (Java, React, MySQL, Spring Boot) using Agile and Scrum methodologies.",
      imgUrl: "https://credsverse.com/credentials/77738f25-3073-42d2-a5ce-b9346eece245?preview=1",
      img:zipcodeCertificate
    },
    {
      title: "Tech Elevator",
      description: "Awarded Capstone Project Trophy Recipient. A full-stack Java coding bootcamp learning how to develop dynamic web-based software systems using the Java programming language and platform with 700+ hours of lecture and application including: Object-Oriented Programming: Java, JavaScript, Spring Boot, Vue.js, JDBC, Table Design, SQL, PostgreSQL, E/R diagrams, Agile, Unit Testing (JUnit), Integration Testing, Unix Command Line navigation, Git, IntelliJ",
      imgUrl: "",
      img:techElevator
    },
    
    {
      title: "HackerRank Frontend Developer (React) Certificate",
      description: "",
      imgUrl: "https://www.hackerrank.com/certificates/242058ed99e7",
      img:reaactHacker
    },
    {
      title: "Curriculeon Full Stack Web Developer",
      description: "Topics Covered: Command Line Scripting, Git Command Line Interface, front-End Development, Java Web Development, Data Engineering, Virtualization, Containerization, Cloud Computing, Interview Preparation, Algorithms, Techpreneurship",
      imgUrl: "https://curriculeon.github.io/Curriculeon/graduate-certificates/Mohammad%20Naser.html",
      img:leonCertificate
    },
    {
      title: "React Tutorial",
      description: "The course includes 90 in-depth lessons covering essential React concepts such as: React State, Props, Effects, Custom Hooks (useState, useEffect, useFetch, useParams, useContext, and more), Components, localStorage, ReactDOM, advanced React Router, Context, APIs, Accessibility, Error Handling, Testing, and several React-based projects.",
      imgUrl: "https://res.cloudinary.com/dbfn5lnvx/image/authenticated/s--_UBwapTV--/v1728525288/certificates/react/mohammednaser-2142.pdf",
      img:reactTutorial
    }
    // {
    //   title: "Javascript Certificate",
    //   description: "Course covers over 90 lessons: Strings, Numbers, Arrays, Objects, Functions, Prototypical inheritance, JSON, Promises, Fetch, Events, async/await, DOM, Web Components and projects.",
    //   imgUrl: "https://res.cloudinary.com/dbfn5lnvx/image/authenticated/s--CaGk2bbh--/v1684977725/certificates/javascript/mohammednaser-4586.pdf",
    //   img:javascriptCert
    // }
  ];

  const blogs = [
    {
      title: "Article: Step by Step Tutorial: How to create a full stack website with Springboot/Java in under an hour",
      description: "Click here to read the article!",
      imgUrl: "https://medium.com/@mnaser11218/a-quick-and-easy-guide-build-a-full-stack-restful-spring-boot-website-in-10-simple-steps-5c7e0c8581ab",
      img:fullstackArticle
    },
    {
      title: "“Step-by-Step Tutorial: Integrating OpenAI’s API into Your React Application for Beginners.”",
      description: "Click here to read the article!",
      imgUrl: "https://medium.com/@mnaser11218/example-video-showcasing-the-functionality-of-grammar-correction-using-openais-api-26271ec5500c",
      img:openAIBlog
    },
    {
      title: "A Step-by-Step Guide: How to Host Your React Application on AWS Cloud Using AWS Amplify and GitHub Repositories",
      description: "",
      imgUrl: "https://medium.com/@mnaser11218/a-step-by-step-guide-to-hosting-your-react-application-on-aws-cloud-using-aws-amplify-and-github-ec0a3e7bd5fe",
      img:blogAWS
    },
    {
      title: "React Basics Q&A: Understanding React, ReactDOM, and the Virtual DOM. What sets React apart ?",
      description: "",
      imgUrl: "https://medium.com/@mnaser11218/react-basics-q-a-understanding-react-reactdom-and-the-virtual-dom-what-sets-react-apart-0a536513d628",
      img:reactDom
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
<p><b>ClassQuery:</b> React, OpenAI API, JS, HTML, CSS, Java, SpringBoot, H2, Docker, Cypress, JMeter,  <br></br><b>Spark:</b> React, Axios, AWS S3 bucket, OpenAI API, Java, SpringBoot, H2, EC2 instance. <br></br> <b>Tech-Reads:</b> React, Vite, JS, HTML, Tailwind CSS <br></br><b>Dictionary_Typescript:</b> TypeScript, JS, HTML, CSS (Dictionary API) <br></br> <b>Arcade Simulation: </b>Object-Oriented Programming: Java, JUnit <br></br><b>Fullstack Person Tracker:</b> Javascript, Axios, HTML, CSS, Java Springboot, H2, JMeter for stress testing  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Blogs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                   <div style={{color:"white", fontSize:"15px", fontStyle:"bold", margin: "20px"}}><p>Click on the Title of the Project to Route to the Application/Project </p></div> 
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
                    <p>Click on Certificate title for Certificate credentials</p>
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
                    <p>Click on Title to read some of the articles, tutorials and blogs I've authored!</p>
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
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
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