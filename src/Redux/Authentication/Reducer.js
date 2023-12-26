import { LOGIN_ERORR, LOGIN_LOADING, LOGIN_SUCCSS } from "./ActionType"

const initial= {
    isLoading: false,
    isError: false,
    isAuth: false,
    token:localStorage.getItem("token")||"",
  }


  export const reducer =(state=initial, {type,payload})=>{
    switch (type) {
        case LOGIN_SUCCSS:
            return{
              ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                token: payload,
              }

              case LOGIN_LOADING:
                return{
                  ...state,
                    isLoading: true,
                    isError: false,
                    isAuth: false,
                  
                }
                case LOGIN_ERORR:
                    return{
                      ...state,
                        isLoading: false,
                        isError: true,
                        isAuth: false,
                       
                    }
                
    
        default:
          return state
    
      }
    }