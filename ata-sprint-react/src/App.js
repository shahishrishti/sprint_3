import './App.css';
import { ModifyDriverComponent } from './components/modify_driver'
import {AddBookingComponent} from './components/add_booking'
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { AddRouteComponent } from './components/add_route'
import { AddVehicleComponent } from './components/add_vehicle';
import {AddDriverComponent} from './components/add_driver';
import { ViewRouteComponent } from './components/view_route';
import { ViewVehicleComponent } from './components/view_vehicle';
import { HomePageComponent } from './components/home_page';
import { ViewBookingByStatusComponent } from './components/view_booking_by_status';
import { CancelBookingComponent } from './components/cancel_booking';
import { UpdateRouteComponent } from './components/update_route';
import { ModifyVehicleComponent } from './components/modify_vehicle';
import { ViewDriverComponent } from './components/view_driver';
import { ViewBookingComponent } from "./components/view_booking";
import LandingComponent from "./components/Home";

function App(props) {
  return (
      <Router>
      <div className="App">
        
              <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/viewroute">View Route</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/addroute">Add Route</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/viewvehicle">View Vehicle</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/addvehicle">Add Vehicle</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/addbooking">Add Booking</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/adddriver">Add Driver</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/editdriver">Edit Driver</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/viewbookingbystatus">View Booking By Status</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/cancelbooking">Cancel Booking</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/editroute">Edit Route</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/editvehicle">Edit Vehicle</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/viewdriver">View Driver</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/booking">View Booking</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/home">Landing Page</Link>
          <hr />
  
        <Switch>
            <Route exact path="/">
              <HomePageComponent />
            </Route>
            <Route path="/viewroute">
              <ViewRouteComponent store={props.store}/>
            </Route>
            <Route path="/addroute">
              <AddRouteComponent store={props.store}/>
            </Route>
            <Route path="/viewvehicle">
              <ViewVehicleComponent/>
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
            <Route path="/viewbookingbystatus">
              <ViewBookingByStatusComponent/>
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
            <Route path="/home">
              <LandingComponent/>
            </Route>
          </Switch> 
          </div>       
          </Router>
    );
  }
export default App;
