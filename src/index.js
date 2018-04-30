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

  incrementSlideNum = () => {
    let slideNum = this.state.slideNum;

    if (slideNum >= 5){
      this.setState({ slideNum: 0});
    }
    else{
      this.setState({ slideNum: slideNum + 1});
    }
  }

  decrementSlideNum = () => {
    let slideNum = this.state.slideNum;

    if (slideNum <= 0){
      this.setState({ slideNum: 5});
    }
    else {
       this.setState({ slideNum: slideNum - 1});
     }
  }



  render() {
    this.slides = [ image, image2, 'image-3.png', 'image-4.png'];  // add more pics to slider
    const slideNum = this.state.slideNum;

    return(
      <div>
        <NavBar />
        <div className="slider">
          <h3>{slideNum}</h3>
          <h3 class="nav-menu" onClick={this.decrementSlideNum}>Left</h3>
          <img src={this.slides[slideNum]} />
          <h3 class="nav-menu"><a onClick={this.incrementSlideNum}>Right</a></h3>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Slider />,
  document.getElementById('app')
);
