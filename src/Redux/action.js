import axios from "axios";
import * as types from "./action.types";
import {setToast} from "../Functions/Toastfunction"

export const UserLogin =
  (url, data, toast, nav, navigate) => async (dispatch) => {
    console.log(toast)
    dispatch({ type: types.LOGIN_LOADING });
    return axios({
      method: "POST",
      url: url,
      data: data,
    })
      .then((r) => {
        console.log(r.data,"r")
        dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
        sessionStorage.setItem("token", JSON.stringify(r.data.token));
        sessionStorage.setItem("name", JSON.stringify(r.data.user.name));
        sessionStorage.setItem(
          "username",
          JSON.stringify(r.data.user.user.name)
        );
        setToast(toast, "Login Successfull", "", "success");
        navigate(nav);
      })
      .catch((err) => {
       console.log(err, "err");
        dispatch({ type: types.LOGIN_FAILED });
        setToast(toast, `${err.response.data.err}`, "", "error");
      });
  };