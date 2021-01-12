import './App.css';
import { AddRouteComponent } from './components/add_route'
import { AddVehicleComponent } from './components/add_vehicle'
import {AddDriverComponent} from './components/add_driver'
function App() {
  return (
    <div className="App">
        {/*<AddVehicleComponent/>}
      {/* <AddRouteComponent/> */}
      <AddDriverComponent/>
    </div>
  );
}

export default App;
