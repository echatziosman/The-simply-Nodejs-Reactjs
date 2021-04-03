import React, { Component } from 'react';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';
import axios from 'axios';

class AddEmployee extends Component {
  state = { name: '', surname: '', id: [] };

  onClickSubmit = () => {
    // event.preventDefault();
    const { id, name, surname } = this.state;
    const customer = {
      id,
      name,
      surname,
    };

    //this.setState({ customers: customer });
    axios
      .post('http://localhost:5000/api/save', customer)
      .then(response => console.log(response))
      .catch(err => console.log(err));

    // console.log(JSON.stringify(customer));
  };

  onClickChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Add Customer</h1>
        <Form onSubmit={this.onClickSubmit}>
          <FormGroup>
            <Label for='id'>Id</Label>
            <Input
              type='Number'
              placeholder={this.state.id}
              name='id'
              onChange={this.onClickChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for='name'>Name</Label>
            <Input
              type='text'
              placeholder='Enter your name'
              name='name'
              onChange={this.onClickChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for='surname'>Surname</Label>
            <Input
              type='text'
              placeholder='Enter your surname'
              name='surname'
              onChange={this.onClickChange}
            ></Input>
          </FormGroup>
          <Button color='primary' type='submit'>
            Save
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddEmployee;
