import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { Container } from 'semantic-ui-react';
import MainForm from'./MainForm'
//import Login from "./Login";

//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class App extends React.Component {
	render() {
  	return (
	<div>
	<MainForm />
	</div>  

    );
  }	
}
export default App;
