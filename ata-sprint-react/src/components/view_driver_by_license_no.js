import React from 'react';
import '../css/add_booking.css'

export const ViewDriverByLicensenoComponent = (props) =>{
    return (
        <div class="testbox">
            <form >
                <div class="banner">
                    <h1>View Driver By License Number</h1>
                </div>
                <div class="item">
                    <p>License Number</p>
                <div class="name-item">
                    <input type="text" name="name" placeholder="Enter your license number" />
                </div>
                </div>

                <div class="btn-block">
                    <button type="submit" >View</button>
                </div>
            </form>
        </div>

    );
}