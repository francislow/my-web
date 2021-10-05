import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Actionbar from "./screens/Actionbar";
import Main from "./screens/Main";
import Project from "./screens/Project";
import About from "./screens/About";

function App() {
  return (
    <Router>
      <Actionbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/projects/:projectId">
          <Project />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
