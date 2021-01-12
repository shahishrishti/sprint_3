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
               <table class="content-table">
                    <thead>
                        <tr>
                        <th scope="col">SrNo.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">License No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
                         </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}