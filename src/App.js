import React from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route,Redirect,}from "react-router-dom";
import home from "./components/home";
import querypage from "./components/querypage";
import department1 from "./components/DEPARTMENTS/department_1";
import department2 from "./components/DEPARTMENTS/department_2";
function App() {
    return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" component ={home}/>
          <Route exact path="/querypage" component={querypage}/>
          <Route exact path="/querypage/department_1" component={department1}/>
          <Route exact path="/querypage/department_2" component={department2}/>
          <Redirect to ="/"/>
        </Switch>
      </Router >
    </>
    );
}
export default App;