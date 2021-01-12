import React from 'react';
import '../css/add_booking.css'

export const ViewDriverByNameComponent = (props) =>{
    return (
        <div class="testbox">
            <form >
                <div class="banner">
                    <h1>View Driver By Drivername</h1>
                </div>
                <div class="item">
                    <p>Driver name</p>
                <div class="name-item">
                    <input type="text" name="name" placeholder="Enter your name" />
                </div>
                </div>

                <div class="btn-block">
                    <button type="submit" >View</button>
                </div>
            </form>
        </div>

    );
}