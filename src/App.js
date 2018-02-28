import React, { Component } from 'react';
import './App.css';
import AlfaWrapper from './components/AlfaWrapper/AlfaWrapper';
import CreditCalc from './components/CreditCalc/CreditCalc';

class App extends Component {
  render() {
    return (
        <AlfaWrapper>
          <CreditCalc/>
        </AlfaWrapper>
    );
  }
}

export default App;
