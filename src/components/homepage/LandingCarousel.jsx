import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import imgCD from '../../assets/carousel/cd.JPG'
import imgHLE from '../../assets/carousel/hle.JPG'
import imgID from '../../assets/carousel/id.JPG'
import imgRC from '../../assets/carousel/reactcode.JPG'
import imgR from '../../assets/carousel/resume.JPG'

import styled from 'styled-components'

const CarouselMainDiv = styled.div `
  .carouselContainer {
  }
`

export default () => (
  <CarouselMainDiv>
  <Carousel autoPlay className="carouselContainer" axis="vertical">
    <div>
      <img src={ imgID } alt="Information Design Landing Page"/>
      <p className="legend">React Mobile First Responsive Design</p>
    </div>
    <div>
      <img src={ imgCD } alt="Cowboy Drive Landing Page"/>
      <p className="legend">J Query Flex Box Mobile First Responsive Design</p>
    </div>
    <div>
      <img src={ imgHLE } alt="Heather Love Entertainment Landing Page"/>
      <p className="legend">React Mobile First Responsive Design</p>
    </div>
    <div>
      <img src={ imgR } alt="J. Graves Resume"/>
      <p className="legend">5+ years of Front End Experience, 20 years of Business Experience</p>
    </div>
    <div>
      <img src={ imgRC } alt="React Code"/>
      <p className="legend">Exclusively React Ecosystem Front End Focused Full Stack JS Developer</p>
    </div>
  </Carousel>
  </CarouselMainDiv>
);
