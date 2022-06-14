import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

let token = localStorage.getItem("token");
const initilastate = {
  loading: false,
  error: false,
  isauth: token ? true : false,
  token: "",
};

export const authreducer = (state = initilastate, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading:true,
        error:false,
      };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem("token",payload.token)
      return {
        ...state,
        loading:false,
        error:false,
        isauth:true,
        token:payload.token
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        loading:false,
        error:true,
        isauth:false
      };
    }

    case LOGOUT: {
      localStorage.removeItem("token")
      return {
        ...state,
        isauth:false,
        token:"",
      };
    }


    default: {
      return state;
    }
  }
};
