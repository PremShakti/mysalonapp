import axios from "axios";
import {
  DELETE_IMAGE_ERROR,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCSESS,
 
  GET_IMAGE_ERROR,
  
  GET_IMAGE_REQUEST,
  GET_IMAGE_SUCCSESS,
  POST_IMAGE_ERROR,
  POST_IMAGE_REQUEST,
  POST_IMAGE_SUCCSESS,
  UPDATE_IMAGE_ERROR,
  UPDATE_IMAGE_REQUEST,
  UPDATE_IMAGE_SUCCSESS,
} from "./ActionType";



// const api=process.env.REACT_APP_API_KEY

export const getImages = (data) => (dispatch) => {
  dispatch({ type: GET_IMAGE_REQUEST });
  

  axios
    .get(`${process.env.REACT_APP_BASE_URL}/getgallery`)
    .then((res) => dispatch({ type: GET_IMAGE_SUCCSESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_IMAGE_ERROR }));
};





export const postImages = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
console.log(token)
  const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/addgallery`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: POST_IMAGE_REQUEST });
  // Write logic here
  return axiosInstance
    .post(`${process.env.REACT_APP_BASE_URL}/addgallery`, data)
    .then((res) => dispatch({ type: POST_IMAGE_SUCCSESS }))
    .catch((err) => dispatch({ type: POST_IMAGE_ERROR }));
};

export const changeImageCategary = (id, gtype) => (dispatch) => {
  // Write logic here
  const token = localStorage.getItem("token");

  const axiosInstanc = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/delete`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: UPDATE_IMAGE_REQUEST });

  return axiosInstanc
    .patch(`${process.env.REACT_APP_BASE_URL}/update/${id}`, gtype)
    .then((res) => {
      dispatch({ type: UPDATE_IMAGE_SUCCSESS });
    })
    .catch((err) => dispatch({ type: UPDATE_IMAGE_ERROR }));
};

export const DeleteImage = (id) => (dispatch) => {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/delete`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: DELETE_IMAGE_REQUEST });
  // Write logic here
  return axiosInstance
    .delete(`${process.env.REACT_APP_BASE_URL}/delete/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_IMAGE_SUCCSESS });
    })
    .catch((err) => dispatch({ type: DELETE_IMAGE_ERROR }));
};
