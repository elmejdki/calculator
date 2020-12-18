import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operation) {
    this.setState(
      prevState => (calculate(prevState, operation)),
    );
  }

  render() {
    const { next, total, operation } = this.state;

    return (
      <>
        <Display
          result={
            `${(!total && next) || total || ''}
             ${operation || ''}
             ${(total && next) || ''}`
          }
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
