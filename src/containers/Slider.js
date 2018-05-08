import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class Slider extends Component {
  render() {
    return  <Carousel>
    <Carousel.Item>
      <img width={1920} height={500} alt='900x500' src='http://norrislaketennessee.com/wp-content/uploads/2014/07/Slider-Image-1920-x-500.png' />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1920} height={500} alt='900x500' src='http://norrislaketennessee.com/wp-content/uploads/2014/07/Slider-Image-1920-x-500.png' />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1920} height={500} alt='900x500' src='http://norrislaketennessee.com/wp-content/uploads/2014/07/Slider-Image-1920-x-500.png' />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>;
  }
}
