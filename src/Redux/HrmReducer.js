import * as types from "./action.types"

const initialstate={
    isAuth:JSON.parse(sessionStorage.getItem("token"))?true:false,
    isLoading: false,
    isError: false,
    user:{}
}

export const HrmReducer=(state=initialstate,{type,payload})=>{
    switch (type){
        case types.LOGIN_FAILED: {
            return {
              ...state,
              isError: true,
              isLoading: false,
            };
          }
          case types.LOGIN_LOADING: {
            return {
              ...state,
              isLoading: true,
            };
          }
      
          case types.LOGIN_SUCCESS: {
            return {
              ...state,
              user: payload?.user,
              isLoading: false,
              isAuth: true,
            };
          }   
          default: {
            return state;
          }
    }
}