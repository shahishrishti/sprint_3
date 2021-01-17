//import statements

import './App.css';
import { ModifyDriverComponent } from './components/modify_driver'
import {AddBookingComponent} from './components/add_booking'
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { AddRouteComponent } from './components/add_route'
import { AddVehicleComponent } from './components/add_vehicle';
import {AddDriverComponent} from './components/add_driver';
import { ViewRouteComponent } from './components/view_route';
import { ViewVehicleComponent } from './components/view_vehicle';
import { UserPageComponent } from './components/user';
import { CancelBookingComponent } from './components/cancel_booking';
import { UpdateRouteComponent } from './components/update_route';
import { ModifyVehicleComponent } from './components/modify_vehicle';
import { ViewDriverComponent } from './components/view_driver';
import { ViewBookingComponent } from "./components/view_booking";
import { AdminPageComponent } from './components/admin';
import LandingComponent from "./components/Home";
import { ViewBookingByStatusComponent } from './components/view_booking_by_status';

function App(props) {
  return (
      <Router>
      <div className="App">  
        <Switch>
            <Route exact path="/user">
              <UserPageComponent />
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
            <Route exact path="/">
              <LandingComponent/>
            </Route>
            <Route path="/admin">
              <AdminPageComponent/>
            </Route>
          </Switch> 
          </div>       
          </Router>
    );
  }
export default App;
