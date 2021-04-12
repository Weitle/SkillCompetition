import React, { Component } from 'react';
import _ from 'lodash';

import EngineerCard from './EngineerCard';

class EngineerRow extends Component {
  state = {  }
  render() {
    const {engineers, count} = this.props;
    const indexs = _.range(count);
    return (
      <div className="row mb-3">
        {
          indexs.map(index=>(
            <div className="col">
              {index < engineers.length ? <EngineerCard engineer={engineers[index]} /> : null}
            </div>
          ))
        }
      </div>
    );
  }
}
 
export default EngineerRow;