import '../css/admin.css'
import {Link} from 'react-router-dom';
export const UserNavBarComponent = (props) => {
    return (
            <div class="navbar">    
                <div><Link to="/">A-Z Travel Agency</Link></div>  
                <div class="dropdown" id="last">
                    <div class="dropbtn">Booking</div>
                    <div class="dropdown-content">
                        <Link to="/addBooking">Book Vehicle</Link>
                        <Link to="/cancelbooking">Cancel Booking</Link>
                        <Link to="/viewbookingbystatus">View Booking</Link>
                    </div>
                </div>         
            </div>
    );
}