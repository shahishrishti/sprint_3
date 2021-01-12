import './App.css';
import { AddRouteComponent } from './components/add_route'
import { AddVehicleComponent } from './components/add_vehicle'
import { UpdateRouteComponent } from './components/update_route';

function App() {
  return (
    <div className="App">
        {/*<AddVehicleComponent>*/}
      {/* <AddRouteComponent/> */}
      <UpdateRouteComponent/>
    </div>
  );
}

export default App;
