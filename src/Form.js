
//import React from 'react';
import{SplitButton,MenuItem}from'react-bootstrap';
import React, { Component} from 'react';
import { Button } from 'react-bootstrap';
//import { Row, Col, Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
//import 'bootstrap/dist/js/bootstrap.min.js'


  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      pwd: null,
      errors: {
        name: '',
        email: '',
        pwd: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
  
    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email': 
     var  emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errors.email = 
        emailValid
            ? ''
            : 'Email is not valid!';
        break;
      case 'pwd': 
        errors.pwd = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
	render() {
  	return (
  
    
      <div class="container center_div">
    <div class="container"  >
      <center>
    <h2>Ecom</h2>
   
    </center> 
    <form class="form-group"   class="col-lg-7 offset-lg-5 " onSubmit={this.handleSubmit}>
      
    <div class="form-inline" >
    
        <label class="sr-only" for="name">Name:</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name"  name="name" onChange={this.handleChange} />
        
        <br/><br/>
        
      </div>
      <div class="form-inline" >
        <label class="sr-only" for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email"  name="email"  onChange={this.handleChange} />
        <br/><br/>
      </div>
      <div class="form-inline" >
        <label class="sr-only" for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={this.handleChange} />
        <br/><br/>
        </div>
        <div class="form-inline" >
        <label class="sr-only" for="mobile">Mobile No:</label>
        <input type="text" class="form-control" id="mobile" placeholder="Enter phone no" name="mobile" onChange={this.handleChange} />
        <br/><br/>
      </div>
      
      <br/><button type="submit" class="btn btn-default" >Register</button>
    </form>
    
  </div>
  </div> 
    );
  }
}
export default Form;