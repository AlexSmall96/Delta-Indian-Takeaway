import React, {useState} from "react"
import { Container, Image, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


    return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
      <Carousel.Item>
        <Container>
          <Row>
            <Image src='https://res.cloudinary.com/dojzptdbc/image/upload/v1748446147/delta1_kavq59.jpg' fluid/>
          </Row>
          <Row>
            <Image src='https://res.cloudinary.com/dojzptdbc/image/upload/v1748446147/delta3_igo7pw.jpg' fluid/>
          </Row>
        </Container>
        <Image />
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Image src='https://res.cloudinary.com/dojzptdbc/image/upload/v1748446147/delta2_z4q79a.jpg' fluid/>
          </Row>
          <Row>
            <Image src='https://res.cloudinary.com/dojzptdbc/image/upload/v1748446147/delta1_kavq59.jpg' fluid/>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
    )
};

export default HomePage
