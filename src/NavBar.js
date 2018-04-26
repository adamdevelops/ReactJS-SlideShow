import React from 'react';
import './index.css'

export class NavBar extends React.Component{

  render(){
    return(
      <div className="nav-menu">
        <h3 className="nav-menu"><a>Home</a></h3>
        <h3 className="nav-menu"><a>Next</a></h3>
        <h3 className="nav-menu"><a>Prev</a></h3>
      </div>
    );
  }
}
