import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { AddRouteComponent } from './components/add_route'
import { AddVehicleComponent } from './components/add_vehicle'
import { ViewRouteComponent } from './components/view_route'
import { HomePageComponent } from './components/home_page'
function App() {
  return (
    <Router>
    <div className="App">
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addroute">Add Route</Link>
          </li>
          <li>
            <Link to="/viewroute">View Route</Link>
          </li>
          <li>
            <Link to="/addvehicle">Add Vehicle</Link>
          </li>
        </ul>

        <hr />

      <Switch>
          <Route exact path="/">
            <HomePageComponent />
          </Route>
          <Route path="/addroute">
            <AddRouteComponent/>
          </Route>
          <Route path="/viewroute">
            <ViewRouteComponent/>
          </Route>
          <Route path="/addvehicle">
            <AddVehicleComponent/>
          </Route>
        </Switch> 
        </div>       
        </Router>
  );
}

export default App;
