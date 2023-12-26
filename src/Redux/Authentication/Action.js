import axios from "axios";
import { LOGIN_LOADING, LOGIN_SUCCSS } from "./ActionType";


export const login = (data)=>(dispatch) => {
    dispatch({type:LOGIN_LOADING})
    // Complete login logic here
  return axios.post(`${process.env.REACT_APP_BASE_URL}/login`,data)
//   return axios.post(`http://localhost:8080/admin/login`,data)
  .then((res)=>{ dispatch({type:LOGIN_SUCCSS,payload:res.data.token})
localStorage.setItem("token",res.data.token)
  console.log(res)
}
    )
  };


  export const gettoken =(data)=>(dispatch) => {
    dispatch({type:LOGIN_LOADING})
   
  // return axios.get(`${process.env.REACT_APP_BASE_URL}/getsdata`)
  return axios.post(`${process.env.REACT_APP_BASE_URL}/login`,data)
  .then((res)=>{ dispatch({type:LOGIN_SUCCSS,payload:res.data.token})

 
}
    )
  };