import './App.css';
import React, { Component } from 'react';
import Customers from './components/customers/Customers';
import AddEmployee from './components/customers/AddEmployee';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Container>
          <Row>
            <Col xl='6'>
              <AddEmployee />
            </Col>
            <Col xl='6'>
              <Customers />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
