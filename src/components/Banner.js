import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  //const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const toRotate = ["Full-Stack Developer", "QA Engineer", "Java, React, MySQL" ]
  // testing new comment
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/in/mohammed-naser123';
  };
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mohammed Naser  `} <br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full-Stack Developer", "QA Engineer", "Java, React, MySQL" ]'><span className="wrap">{text}</span></span></h1>
                  <p>About Me: <br></br>
                  Full-Stack Developer and QA Engineer with an M.A in English Literature, passionate about creating high-quality, AI-driven applications. With hands-on experience in Java, React, and OpenAI API integrations, I specialize in developing robust, scalable software while maintaining a strong focus on unit testing, automated testing, and Agile methodologies.  Experienced in implementing QA best practices to enhance software quality, identify and resolve bugs early, and ensure the delivery of scalable, high-performance applications. My passion lies in bridging the gap between software development and quality assurance to deliver seamless, user-centered solutions.</p>
                  <button onClick={handleClick}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}