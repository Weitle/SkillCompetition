import React, { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-5">
          <h1>Hello</h1>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;