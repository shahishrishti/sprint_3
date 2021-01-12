import './App.css';
import { ModifyDriverComponent } from './components/modify_driver'
import {AddBookingComponent} from './components/add_booking'
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { AddRouteComponent } from './components/add_route'
import { AddVehicleComponent } from './components/add_vehicle';
import {AddDriverComponent} from './components/add_driver';
import { ViewRouteComponent } from './components/view_route';
import { HomePageComponent } from './components/home_page';
import { ViewBookingByNameAndStatusComponent } from './components/view_booking_by_name_and_status';
import { ViewBookingByNameComponent } from './components/view_booking_by_name';
import { CancelBookingComponent } from './components/cancel_booking';
import { UpdateRouteComponent } from './components/update_route';
import { ModifyVehicleComponent } from './components/modify_vehicle';
import { ViewDriverComponent } from './components/view_driver';
import { ViewBookingComponent } from "./components/view_booking";

function App() {
  return (
      <Router>
      <div className="App">
        
              <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/viewroute">View Route</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/addroute">Add Route</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/addvehicle">Add Vehicle</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/addbooking">Add Booking</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/adddriver">Add Driver</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/editdriver">Edit Driver</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/viewbookingbyname">View Booking By Name</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/viewbookingbystatus">View Booking By Status</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/cancelbooking">Cancel Booking</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/editroute">Edit Route</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/editvehicle">Edit Vehicle</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/viewdriver">View Driver</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/booking">View Booking</Link>&nbsp;&nbsp;&nbsp;

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
            <Route path="/adddriver">
              <AddDriverComponent/>
            </Route>
            <Route path="/editdriver">
              <ModifyDriverComponent/>
            </Route>
            <Route path="/viewbookingbyname">
              <ViewBookingByNameComponent/>
            </Route>
            <Route path="/viewbookingbystatus">
              <ViewBookingByNameAndStatusComponent/>
            </Route>
            <Route path="/cancelbooking">
              <CancelBookingComponent/>
            </Route>
            <Route path="/editroute">
              <UpdateRouteComponent/>
            </Route>
            <Route path="/editvehicle">
              <ModifyVehicleComponent/>
            </Route>
            
            
            <Route path="/viewdriver">
              <ViewDriverComponent/>
            </Route>
            <Route path="/booking">
              <ViewBookingComponent/>
            </Route>
          </Switch> 
          </div>       
          </Router>
    );
  }
export default App;