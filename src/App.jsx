import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    };
  }

  changeDeadline(event) {
    event.preventDefault();
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">CountDown to {this.state.deadline}</div>
        <div>
          <Clock deadline={this.state.deadline} />
        </div>
        <Form onSubmit={event => this.changeDeadline(event)} inline>
          <FormControl
            className="Deadline-input"
            onChange={event =>
              this.setState({ newDeadline: event.target.value })
            }
            placeholder="new date"
          />
          <Button
            bsStyle="primary"
            onClick={event => this.changeDeadline(event)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
