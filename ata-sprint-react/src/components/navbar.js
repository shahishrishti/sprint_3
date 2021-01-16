import '../css/admin.css'
import {Link} from 'react-router-dom';
export const NavBarComponent = (props) => {
    return (
            <div class="navbar">    
                <div><Link to="/">A-Z Travel Agency</Link></div>  
                <div class="dropdown" id="last">
                    <div class="dropbtn">Booking</div>
                    <div class="dropdown-content">
                        <Link to="/booking">View All Bookings</Link>
                    </div>
                </div>  
                <div class="dropdown">
                    <div class="dropbtn">Driver</div>
                    <div class="dropdown-content">
                        <Link to="/adddriver">Add Driver</Link>
                        <Link to="/viewdriver">View Driver</Link>
                    </div>
                </div>
                <div class="dropdown">
                    <div class="dropbtn">Route</div>
                    <div class="dropdown-content">
                        <Link to="/addroute">Add Route</Link>
                        <Link to="/viewroute">View Route</Link>
                    </div>
                </div>       
                <div class="dropdown">
                    <div class="dropbtn">Vehicle</div>
                    <div class="dropdown-content">
                        <Link to="/addvehicle">Add Vehicle</Link>
                        <Link to="/viewvehicle">View Vehicle</Link>
                    </div>
                </div>         
            </div>
    );
}