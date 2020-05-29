import React, { Component } from 'react';
import Form from './Form';
import Login from './Login';
class MainForm extends Component {
    state = {
        step: 1,
        name: '',
        
        email: ''
  
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { name, email} = this.state;
        const values = { name, email };
 
        switch(step) {
        case 1:
            return <Form
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <Login
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
 
        // case 3:
        //     return <Success />
        }
    }
}

export default MainForm;