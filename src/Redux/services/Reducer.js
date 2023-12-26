import { DELETE_SERVICES_SUCCSESS, GET_SERVICES_SUCCSESS } from "./ActionType";

  
  const initialState = {
    getServicessucses:false,
    servicesData:[],
    deleteSucess:false
   
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_SERVICES_SUCCSESS:
        return {
            ...state,
            getServicessucses:true,
            servicesData:payload
          
        };
  
    
  
      case DELETE_SERVICES_SUCCSESS:
        return {
          ...state,
          deleteSucess: true,
         
        };
  
     
  
      default:
        return state;
    }
  };
  