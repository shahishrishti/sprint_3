//import statements

import '../css/admin.css'
import {UserNavBarComponent} from './user_navbar'

//Functional Components

export const UserPageComponent = (props) => {
    return (
        <div id="admin">
            <UserNavBarComponent/>
            <p id="text">Please select from NavBar to perform operations.</p>
            <div id="quotation">
                <p id="thought">The world is a book and those who do not travel read only one page.</p>
            </div>
        </div>
    );
}