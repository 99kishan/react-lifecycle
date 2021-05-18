import React, { Component } from "react";
import Clock from "./Clock";
import Dark from "./Dark.mp4";
import "./App.css";

export default class DisplayClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      isActive: false,
    };
  }
  


  deleteClock = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
      <video autoPlay loop muted 
        style={{
          position:"absolute",
          width:"100%",
          left:"50%",
          top:"50%",
          height:"100%",
          objectFit:"cover",
          transform:"translate(-50%, -50%)",
          zIndex:"-1"
        }}>
          <source src={Dark} type="video/mp4" />
        </video>
        {this.state.show ? <Clock /> : <h1 className="remove">Clock is removed</h1>}
        <br />
        <button className='button b1' onClick={this.deleteClock}>Click here</button>
      </div>
    );
  }
}