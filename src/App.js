import React from 'react';
import "./App.css"
import DisplayClock from "./Display.js";
import ReactDOM from ''

function App() {
  return <div className='App'>
    <DisplayClock />
  </div>

}

export default App;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



