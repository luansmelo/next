import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "../pages/Details/Details";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/details/:id" component={Details} />
    </Switch>
  </Router>
);

export default Routes;
