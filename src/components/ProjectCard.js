import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, img }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={imgUrl}> <img  src={img} />
        <div className="proj-txtx">
          <h5>{title}</h5>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}