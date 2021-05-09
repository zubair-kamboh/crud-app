import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Application from "./Components/Activity Tracker/TaskTrackerApp";
import Navbar from "./Navbar";
import About from "./About";
import NotFound from "./NotFound";
import CrudApp from "./Components/CRUD App/CrudApp";
import AddUser from "./Components/CRUD App/AddUser";
import ViewUser from "./Components/CRUD App/ViewUser";
import EditUser from "./Components/CRUD App/EditUser";
import Signin from "./MaterialUI";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Application} /> */}
          <Route exact path="/" component={CrudApp} />
          <Route path="/about" component={About} />
          <Route path="/adduser" component={AddUser} />
          <Route exact path="/users/:id" component={ViewUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/signin" component={Signin} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
