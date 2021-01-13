import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/view_route.css'
import GetRouteAction from '../actions/view_all_route_action';

let dispatch;
export const ViewRouteComponent = (props) => {

    let routeList = useSelector(state => state.route.routeReducer);
    dispatch = useDispatch();

    React.useEffect(() => {
        RouteList()
    }, []);

    const RouteList = () => {
        dispatch(GetRouteAction());
    }

    console.log("RouteList: ", routeList);
    if(!Array.isArray(routeList)) {
        routeList = [];
        console.log("Set routeList to blank array");
    }

    return (
        <div class="testbox">
            <form action="/">
                <div class="banner">
                    <h1>View Route</h1>
                </div>
                <div class="item">
                    <p>Search By</p>
                    <select required>
                        <option value="0">Select Option</option>
                        <option value="1">Source</option>
                        <option value="2">Destination</option>
                        <option value="3">Source and Destination</option>
                    </select>
                </div>
                <div class="item">
                    <p>Filter</p>
                    <select required>
                        <option value="0">Select...</option>
                        <option value="1">Mumbai</option>
                        <option value="2">Pune</option>
                        <option value="3">Nashik</option>
                        <option value="4">Nagpur</option>
                        <option value="5">Surat</option>
                    </select>
                </div>
                <div class="btn-block">
                    <button type="submit" href="#">View</button>
                </div>
                <div class="item">
                    <table class="content-table">
                        <thead>
                            <tr>
                                <th scope="col">SrNo.</th>
                                <th scope="col">Source</th>
                                <th scope="col">Destination</th>
                                <th scope="col">Distance</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(routeList)}
                            <tr>
                                
                                <th scope="row">1</th>
                                <td>Mumbai</td>
                                <td>Pune</td>
                                <td>300</td>
                                <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Banglore</td>
                                <td>Hyderabad</td>
                                <td>450</td>
                                <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}

function renderTableData(routeList) {
    console.log("routeList: ", routeList);
}