import Distance from './components/Distance';
import First from './components/First';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

class App extends Component {
        render(){
        return (
              <div>
            <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand as={Link} to ={"/first"}>Assignment</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to ={"/first"}>City Details</Nav.Link>
      <Nav.Link as={Link} to ={"/next"}>Distance</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
              <Switch>
                <Route exact path='/' component={First} /> 
                <Route exact path='/first' component={First} />
                <Route exact path="/next" component={Distance} />
              </Switch>
            </Router>
            </div>
    
  );
}
}
export default App;



