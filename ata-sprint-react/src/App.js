import './App.css';
<<<<<<< HEAD
import {AddBookingComponent} from './components/add_booking';

=======
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { AddRouteComponent } from './components/add_route'
import { AddVehicleComponent } from './components/add_vehicle'
import { ViewRouteComponent } from './components/view_route'
import { HomePageComponent } from './components/home_page'
>>>>>>> 5e2e53532f39081702517a950e971bbaf8ff128f
function App() {
  return (
    <Router>
    <div className="App">
<<<<<<< HEAD
      <AddBookingComponent/>
    </div>
=======
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
>>>>>>> 5e2e53532f39081702517a950e971bbaf8ff128f
  );
}

export default App;
