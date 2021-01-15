import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import '../css/update_route.css'
import UpdateRouteAction from '../actions/update_route_action';

let sourceRef;
let destinationRef;
let distanceRef;
let dispatch;

export const UpdateRouteComponent = (props) => {
  
  sourceRef = useRef(null);
  destinationRef = useRef(null);
  distanceRef = useRef(null);
  dispatch = useDispatch();

    return (
    <div class="testbox">
    <form action="/">
      <div class="banner">
        <h1>Update Route</h1>
      </div>
              
      <div class="item">
        <p>Source</p>
        <select required ref={sourceRef} defaultValue={props.source}>
          <option value="0" hidden>Select Source</option>
          <option value="1">Mumbai</option>
          <option value="2">Pune</option>
          <option value="3">Nashik</option>
          <option value="4">Nagpur</option>
          <option value="5">Surat</option>
          
       </select>
      </div>
      <div class="item">
        <p>Destination</p>
        <select required ref={destinationRef} defaultValue={props.destinatin}>
          <option value="0" hidden>Select Destination</option>
          <option value="1">Pune</option>
          <option value="2">Mumbai</option>
          <option value="3">Nagpur</option>
          <option value="4">Nashik</option>
          <option value="5">Surat</option>
          
       </select>
      </div>
      <div class="item">
        <p>Distance</p>
        <input class="quantity" ref={distanceRef} defaultValue={props.distance} min="20" type="number"/>
      </div>

      <div class="btn-block">
          <button type="submit" href="/" onClick={updateRoute.bind(this, props)}>Update</button>
        </div>
    </form>
    </div>
  
    );
}

function updateRoute(props) {
  console.log('Update route: ', props.route);
  
  props.route.source = sourceRef.current.value;
  props.route.destinatin = destinationRef.current.value;
  props.route.distance = distanceRef.current.value;
  dispatch(UpdateRouteAction(props.route)).then((response) => {
      props.renderAddRouteAction();
  })
}