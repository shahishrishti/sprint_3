import '../css/add_route.css'
export const AddRouteComponent = (props) => {
    return (
        <div>
            <form action="/">
                <div class="banner">
                    <h1>Add Route</h1>
                </div>
                <div class="item">
                    <p>Source</p>
                    <select required>
                        <option value="0">Select Source</option>
                        <option value="1">Mumbai</option>
                        <option value="2">Pune</option>
                        <option value="3">Nashik</option>
                        <option value="4">Nagpur</option>
                        <option value="5">Surat</option>
                    </select>
                </div>
                <div class="item">
                    <p>Destination</p>
                    <select required>
                        <option value="0">Select Destination</option>
                        <option value="1">Mumbai</option>
                        <option value="2">Pune</option>
                        <option value="3">Nashik</option>
                        <option value="4">Nagpur</option>
                        <option value="5">Surat</option>
                    </select>
                </div>
                <div class="item">
                    <p>Distance</p>
                    <input type="number" name="distance" placeholder="Enter distance" min="20" step="0.5"/>
                </div>
                <div class="btn-block">
                    <button type="submit" href="/">Book</button>
                </div>
            </form>
        </div>
    );
}