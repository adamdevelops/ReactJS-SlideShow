import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import { NavBar } from './NavBar.js'
import image from './img/image1.jpg';
import image2 from './img/image-2.png';


export default class Slider extends React.Component {
  constructor(props){
    super(props);

    this.state = {slideNum: 0};

  }

  render() {
    this.slides = [ image, image2, 'image-3.png', 'image-4.png'];
    const slideNum = this.state.slideNum;

    return(
      <div>
        <NavBar />
        <div className="slider">
          <h3>Left</h3>
          <h3>{slideNum}</h3>
          <img src={this.slides[slideNum]} />
          <h3>Right</h3>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Slider />,
  document.getElementById('app')
);
