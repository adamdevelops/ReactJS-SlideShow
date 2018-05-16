import React from 'react';
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.css'
import { NavBar } from './NavBar.js'
import image from './img/image1.jpg';
import image2 from './img/image-2.png';


export default class Slider extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      opacity: 1,
      slideNum: 0
    };

  }

  incrementSlideNum = () => {
    let slideNum = this.state.slideNum;

    // change to first slide if we're at the last slide
    // otherwise increment slideNum value
    if (slideNum >= 5){
      this.setState({ slideNum: 0});
    }
    else{
      this.setState({ slideNum: slideNum + 1});
    }
  }

  decrementSlideNum = () => {
    let slideNum = this.state.slideNum;

    // change to last slide if we're at the first slide
    // otherwise decrement slideNum value
    if (slideNum <= 0){
      this.setState({ slideNum: 5});
    }
    else {
       this.setState({ slideNum: slideNum - 1});
     }
  }



  render() {
    this.slides = [ image, image2, image, image2, image, image2];  // add more pics to slider
    const slideNum = this.state.slideNum;

    return(
      <div>
        <NavBar />

        <div className="slider">
          <h3>Slider Num:{slideNum}</h3>
          <h3 className="nav-menu" onClick={this.decrementSlideNum}>Left</h3>
          <h3 className="nav-menu" onClick={this.incrementSlideNum}>Right</h3>
          <ReactCSSTransitionGroup
                transitionName = "slide"
                transitionEnterTimeout = {4000}
                transitionLeaveTimeout = {4000}>
                <img src={this.slides[slideNum]} key={this.slides[slideNum]} className="center"   />
          </ReactCSSTransitionGroup>
        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <Slider />,
  document.getElementById('app')
);
