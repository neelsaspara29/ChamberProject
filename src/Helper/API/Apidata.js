import axios from "axios";

const BaseURL = "https://api.saurashtrachamber.org/admin";
// const BaseURL = "http://192.168.29.178:2500/admin";
const defaultHeaders = {
  isAuth: true,
  AdditionalParams: {},
  isJsonRequest: true,
  api_key: true,
};
export const ApiGet = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseURL + type, getHttpOptions)
      .then(async (responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        // console.log("responseJsonaaaaaaaaaaaaaaaaaaaaaaaaa", error);

        // if (
        //   error &&
        //   error.hasOwnProperty("response") &&
        //   error.response &&
        //   error.response.hasOwnProperty("data") &&
        //   error.response.data &&
        //   error.response.data.hasOwnProperty("error") &&
        //   error.response.data.error
        // ) {
        //   reject(error.response.data);
        // } else {
        // }
        reject(error);
      });
  });
};
export const ApiPost = (type, body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL + type, body)
      .then(async (responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        // console.log("responseJsonaaaaaaaaaaaaaaaaaaaaaaaaa", error);

        //  if (
        //   error &&
        //   error.hasOwnProperty("response") &&
        //   error.response &&
        //   error.response.hasOwnProperty("data") &&
        //   error.response.data &&
        //   error.response.data.hasOwnProperty("error") &&
        //   error.response.data.error
        // ) {
        //   reject(error.response.data);
        // } else {
        //   reject(error?.response?.data);
        // }
        reject(error);
      });
  });
};
export const getHttpOptions = (options = defaultHeaders) => {
  let headers = {};
  let token = localStorage.getItem("persist:adminAuth_SCCI");
  console.log("token", JSON.parse(token).token);

  token = JSON.parse(JSON.parse(token).token);
  if (options.hasOwnProperty("isAuth") && options.isAuth) {
    headers["Authorization"] = token;
    headers["Cache-Control"] = "no-cache";
  }

  if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }

  if (options.hasOwnProperty("AdditionalParams") && options.AdditionalParams) {
    headers = { ...headers, ...options.AdditionalParams };
  }

  return { headers };
};
