import React, { Component } from 'react';
import Grid from './Grid';
import Legend from './Legend';

class MarsMining extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <div className="container">
          <Legend />
          <Grid />
        </div>

        <template>
          <div className="cell"></div>
        </template>
      </div>
    );
  }
}

export default MarsMining;
