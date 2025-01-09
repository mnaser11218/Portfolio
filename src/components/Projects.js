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
import fullstackArticle from "../assets/img/fullstackart.png"
import techElevator from "../assets/img/techelevator.jpg"
import openAIBlog from "../assets/img/openAI-blog.png"
import blogAWS from "../assets/img/blogaws.png"
import leonCertificate from "../assets/img/leon.png"
import reactDom from "../assets/img/reactDomArticle.png"

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
    }
  
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