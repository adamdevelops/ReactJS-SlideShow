import React from 'react';
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.css'
import { NavBar } from './NavBar.js'
import image from './img/image1.jpg';
import image2 from './img/image-2.png';


// const styles = {
//   transition:'all 1s ease-in'
// }


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
    const img = '<img class="slide" style="" src={this.slides[slideNum]} />'

    return(
      <div>
        <NavBar />
        <div>
        </div>
        <div className="slider">
          <h3>Slider Num:{slideNum}</h3>
          <h3 class="nav-menu" onClick={this.decrementSlideNum}>Left</h3>
          <img class="slider" src={this.slides[slideNum]} />
          <h3 class="nav-menu" onClick={this.incrementSlideNum}>Right</h3>
        </div>
        <div >

        <br />
        <br />
        <br />
        <br />
        <br />

          <ReactCSSTransitionGroup
                transitionName = "slide"
                transitionEnterTimeout = {2900}
                transitionLeaveTimeout = {2900}>
                <img src={this.slides[slideNum]} key={this.slides[slideNum]} class="slide2" align="middle"/>
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
