import axios from "axios";
import { GET_IMAGE_ERROR } from "../postreducer/ActionType";
import { GET_SERVICES_SUCCSESS } from "./ActionType";


export const GetServices = (data) => (dispatch) => {
    dispatch({ type: GET_SERVICES_SUCCSESS });
    // Write logic here
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/services`)
      .then((res) => dispatch({ type: GET_SERVICES_SUCCSESS, payload: res.data }))
      .catch((err) => dispatch({ type: GET_IMAGE_ERROR }));
  };