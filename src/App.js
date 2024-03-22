import React from "react";
 import './App.css';
 import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Signup from "./Signup";
import Header from "./Header";
import Otp from "./Otp";
import UserInterests from "./UserInterests";
import Login from "./Login";





 
    const App = () => (
      <Router> 
      <Switch>
      <Route exact path="/" component={Signup} /> 
        <Route exact path="/signup" component={Signup} /> 
        <Route exact path="/login" component={Login} />
         <Route exact path="/interests" component={UserInterests} />
        <Route exact path="/otp" component={Otp} />
      </Switch>
 </Router>
          
          
            
          
       
       
      )
      
    
  
 




export default App;
