import axios from 'axios';

let GetUserAction = () =>{
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/user"
        );
        dispatch({type:"GET_USER", payload: res.data});
    }
}
export default GetUserAction;