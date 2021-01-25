import React from "react";
import { Container, ImageContainer, Image } from "./Carousel.styled";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import dashboard1 from "../../assets/dashboard1.jpg";
import dashboard2 from "../../assets/dashboard2.jpg";
import dashboard3 from "../../assets/dashboard3.png";
import dashboard4 from "../../assets/dashboard4.png";
import dashboard5 from "../../assets/dashboard5.jpg";

const CarouselContainer = () => {
  return (
    <Container>
      <Carousel plugins={["arrows", "infinite"]}>
        <ImageContainer>
          <Image src={dashboard1} alt="dashboard1" />
        </ImageContainer>
        <ImageContainer>
          <Image src={dashboard2} alt="dashboard2" />
        </ImageContainer>
        <ImageContainer>
          <Image src={dashboard3} alt="dashboard3" />
        </ImageContainer>
        <ImageContainer>
          <Image src={dashboard4} alt="dashboard4" />
        </ImageContainer>
        <ImageContainer>
          <Image src={dashboard5} alt="dashboard5" />
        </ImageContainer>
      </Carousel>
    </Container>
  );
};

export default CarouselContainer;

// Metrics - Income - Expenses - Inventory - Shoppings