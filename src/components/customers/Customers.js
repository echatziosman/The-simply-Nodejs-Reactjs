import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }
  componentDidMount() {
    this.getCustomers();
  }
  getCustomers = () => {
    fetch('http://localhost:5000/api/customers')
      .then(response => response.json())
      .then(data =>
        this.setState({ customers: data }, () =>
          console.log('Veriler geliyor...', data)
        )
      )
      .catch(err => console.log('Hata...', err));
  };
  render() {
    return (
      <div>
        <h1>Customers</h1>
        <Container>
          <ListGroup>
            {this.state.customers.map(customer => (
              <ListGroupItem color='info' key={customer.id}>
                {customer.name} {customer.surname}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

export default Customers;
