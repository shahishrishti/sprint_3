import './App.css';
import { ModifyDriverComponent } from './components/modify_driver'
import {AddBookingComponent} from './components/add_booking'
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { AddRouteComponent } from './components/add_route'
import { AddVehicleComponent } from './components/add_vehicle';
import {AddDriverComponent} from './components/add_driver';
import { ViewRouteComponent } from './components/view_route';
import { HomePageComponent } from './components/home_page';
import { ViewBookingByNameComponent } from './components/view_booking_by_name'
import { ViewBookingByNameAndStatusComponent } from './components/view_booking_by_name_and_status'
function App() {
  return (
      <Router>
      <div className="App">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/viewroute">View Route</Link>
            </li>
            <li>
              <Link to="/addroute">Add Route</Link>
            </li>
            <li>
              <Link to="/addvehicle">Add Vehicle</Link>
            </li>
            <li>
              <Link to="/addbooking">Add Booking</Link>
            </li>
            <li>
              <Link to="/viewbookingbyname">View booking by name</Link>
            </li>
            <li>
              <Link to="/viewbookingbynameandstatus">View booking by name and status</Link>
            </li>
            <li>
              <Link to="/adddriver">Add Driver</Link>
            </li>
            <li>
              <Link to="/editdriver">Edit Driver</Link>
            </li>
          </ul>
  
          <hr />
  
        <Switch>
            <Route exact path="/">
              <HomePageComponent />
            </Route>
            <Route path="/viewroute">
              <ViewRouteComponent/>
            </Route>
            <Route path="/addroute">
              <AddRouteComponent/>
            </Route>
            <Route path="/addvehicle">
              <AddVehicleComponent/>
            </Route>
            <Route path="/addBooking">
              <AddBookingComponent/>
            </Route>
            <Route path="/viewbookingbyname">
              <ViewBookingByNameComponent/>
            </Route>
            <Route path="/viewbookingbynameandstatus">
              <ViewBookingByNameAndStatusComponent/>
            </Route>
            <Route path="/adddriver">
              <AddDriverComponent/>
            </Route>
            <Route path="/editdriver">
              <ModifyDriverComponent/>
            </Route>
          </Switch> 
          </div>       
          </Router>
    );
  }
export default App;
