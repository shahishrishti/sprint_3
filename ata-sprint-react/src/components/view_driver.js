export const ViewDriverComponent = (props) => {
    return (
        <div class="testbox">
            <form action="/">
                <div class="banner">
                    <h1>View Driver</h1>
                </div>
                <div class="item">
                    <p>Search By</p>
                    <select required>
                        <option value="0">Select Option</option>
                        <option value="1">Driver Name</option>
                        <option value="2">Licenseno</option>
                    </select>
                </div>
                <div class="item">
                    <p>Filter</p>
                    <select required>
                        <option value="0">Select...</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                    </select>
                    </div>
                
                <div class="btn-block">
                    <button type="submit" href="#" >View</button>
               </div>
               <div class="item">
                    <table>
                        <thead>
                            <tr>
                                <td>Driver name</td>
                                <td>License no</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><button type="submit" href="#">Edit</button><button type="submit" href="#">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}