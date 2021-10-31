import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Page2 from "./page2";
import Page3 from "./page3";
import Final from "./final";

function Display() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/final">
            <Final />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Display;
