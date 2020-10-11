import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import routes from './routes';
import StudentForm from "./components/Form"
import Display from './components/Display';
import "./components/style.css";

function App() {

  return (
    <div className="App container">
      <header>
        <ul>
          <li><Link to={routes.home}>STUDENT FORM</Link></li>
          <li><Link to={routes.display}>DISPLAY DATA</Link></li>
        </ul>
      </header>
      <Switch>
        <Route exact={true} path={routes.home}>
          <StudentForm></StudentForm>
        </Route>
        <Route exact={true} path={routes.display}>
          <Display />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
/*
<Route exact={true} path={routes.authors}>
  <h1>Authors!</h1>
</Route>
*/
/*
<header>
        <ul>
          <li><Link to={routes.home}>Student Form</Link></li>
          <li><Link to={routes.display}>Display Data</Link></li>
        </ul>
      </header>*/