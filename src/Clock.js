import React, { Component } from "react";
import Dark from "./Dark.mp4";

export default class Clock extends Component {

  constructor(props) {
    console.log('Bahubali-1')
    super(props);

    this.state = {
      date: new Date(),
      count: 0,
      
    };
  }
 
  componentDidMount() {
    console.log('is a')
    this.timerID(setInterval(() => this.tick(), 1000));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Nice Movie')
    if (this.state.date !== prevState.date) {
      this.setState({
        count: this.state.count + 1,
      });
     }
       
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    alert("Clock Component Will Unmount!");
    console.log('Yes or No?')

  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    this.setState({date: new Date()})
    return (
      <div className="App">
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
        <h1 className='head'>React LifeCycle Example</h1>

        <h2 className='App'>It is {this.state.date.toLocaleTimeString()}.</h2>

        <h3 className='App'>This component is Updated {this.state.count} times.</h3>
        
      </div>
      
    );
  }
}




