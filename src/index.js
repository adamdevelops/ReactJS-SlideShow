import React from 'react';
import ReactDOM from 'react-dom'
import { NavBar } from './NavBar.js'

export default class Slider extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <div>
        <NavBar />
        <div className="slider">

        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Slider />,
  document.getElementById('app')
);
