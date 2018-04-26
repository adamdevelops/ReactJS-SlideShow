import React from 'react';
import ReactDOM from 'react-dom'
import { NavBar } from './NavBar.js'
import image from './img/image1.jpg';

export default class Slider extends React.Component {
  constructor(props){
    super(props);

    this.state = {}

  }

  render() {
    this.slides = ['image-1.png', 'image-2.png', 'image-3.png', 'image-4.png'];

    return(
      <div>
        <NavBar />
        <div className="slider">
          <h3>Left</h3>
          <img src={image} />
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
