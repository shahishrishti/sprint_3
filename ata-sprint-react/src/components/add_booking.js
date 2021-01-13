import React from 'react';
import {addBooking} from '../css/add_booking.css';

export const AddBookingComponent = (props) =>{
    return(
        <div class="testbox">
            <form onSubmit={handleSubmit}>
                <div class="banner">
                    <h1>Add Booking</h1>
                </div>
                <div class="item">
                    <p>Passenger contact name</p>
                        <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div class="item">
                    <p>Booking Date</p>
                    <input type="date" id="bookingdate" name="bookingdate"/>
                </div>
                <div class="item">
                    <p>Journey Date</p>
                    <input type="date" id="journeydate" name="journeydate"/>
                </div>
                <div class="item">
                    <p>Route</p>
                    <select required>
                    <option value="1">Mumbai-Pune</option>
                    <option value="2">Pune-Mumbai</option>
                    <option value="3">Nashik-Nagpur</option>
                    <option value="4">Nagpur-Nashik</option>
                    <option value="5">Mumbai-Surat</option>
                    <option value="6">Surat-Mumbai</option>
                    </select>
                </div>
                <div class="item">
                    <p>Vehicle Type</p>
                    <select required>
                    <option value="1">Car</option>
                    <option value="2">Bus</option>
                    </select>
                </div>
                    <div class="btn-block">
                    <button type="submit" href="/">Book</button>
                    </div>
        </form>
    </div>
    );

    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const name = data.get('name');
        if(name==='' || name===null) {
            alert("Name cannot be blank");
            return;
        }
    }
}