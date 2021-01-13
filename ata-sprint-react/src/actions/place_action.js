import axios from 'axios';

let GetPlaceNameAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/place/filter"
          );
          dispatch({type: "GET_PLACENAME", payload: res.data});
    }
}

export default GetPlaceNameAction;
