import React from "react";
import AllData from "./components/alldata";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Home from "./components/home";

import './App.css';
import  {Container, Navbar, Nav, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import UserContext from './components/userContext'

export default function App() {
 return (
<HashRouter>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        
  <Container>
  <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip id="button-tooltip-2">This takes you to the Home page</Tooltip>}
  >
  <Navbar.Brand href="#home">Home page</Navbar.Brand>
</OverlayTrigger>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip id="button-tooltip-2">This takes you to the Create Account page</Tooltip>}
  >
      <Nav.Link href="#CreateAccount">Create Account</Nav.Link>
      </OverlayTrigger>

      <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip id="button-tooltip-2">This takes you to the Deposit page</Tooltip>}
  >  
        <Nav.Link href="#deposit">Deposit</Nav.Link>
        </OverlayTrigger>
        <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip id="button-tooltip-2">This takes you to the Withdraw page</Tooltip>}
  >
        <Nav.Link href="#withdraw">Withdraw</Nav.Link>
        </OverlayTrigger>
        <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip id="button-tooltip-2">This takes you to the All Data page</Tooltip>}
  >
        <Nav.Link href="#alldata">All Data</Nav.Link>
        </OverlayTrigger>


     
    </Nav>
    <Nav>
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="../login">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  
</Navbar>
<UserContext.Provider value={{users:[{name:' ',email:' ',password:' ',balance:' '}]}}>
    <Switch>
          <Route path="/alldata/" component={AllData} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/" component={Home} />
    </Switch>
      
</UserContext.Provider>      
  </HashRouter>
  
  );

}

