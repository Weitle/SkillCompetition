import React, { Component } from 'react';
import _ from 'lodash';

import Navbar from './components/Navbar';
import EngineerRow from './components/EngineerRow';

class App extends Component {
  state = {
    engineers: [
      {id: 1, name: 'engineer 1', department: 'department 1', login: false},
      {id: 2, name: 'engineer 2', department: 'department 1', login: false},
      {id: 3, name: 'engineer 3', department: 'department 2', login: true},
      {id: 4, name: 'engineer 4', department: 'department 3', login: false},
      {id: 5, name: 'engineer 5', department: 'department 2', login: false},
      {id: 6, name: 'engineer 6', department: 'department 3', login: true},
      {id: 7, name: 'engineer 7', department: 'department 4', login: false},
      {id: 8, name: 'engineer 8', department: 'department 4', login: false},
      {id: 9, name: 'engineer 9', department: 'department 5', login: false},
      {id: 10, name: 'engineer 10', department: 'department 5', login: false},
    ],
    rowSize: 3
  }
  render() {
    const {engineers, rowSize} = this.state;
    const rowNumber = _.floor(engineers.length, rowSize);
    const rows = _.range(rowNumber);
    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-5">
          {
            rows.map(row=> <EngineerRow engineers={ _.slice(engineers, row*rowSize
              , (row+1) * rowSize) } count={rowSize} /> )
          }
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;