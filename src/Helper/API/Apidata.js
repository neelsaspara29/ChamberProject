import axios from "axios";

const BaseURL = "http://chamber-env.eba-2jmsfvkk.ap-south-1.elasticbeanstalk.com/admin"
export const ApiGet = (type) => {
    return new Promise((resolve, reject) => {
        axios
            .get(BaseURL + type)
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
export const ApiPost = (type,body) => {
    return new Promise((resolve, reject) => {
        axios
            .post(BaseURL + type,body)
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