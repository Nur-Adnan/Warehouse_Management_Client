import axios from "axios";

const axiosPrivate = axios.create({});

axiosPrivate.interceptors.request.use(function (config) {

    // Perform a task before the request is sent.

    if(!config.headers.authorization){
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
  }, function (error) {

    // Perform some action with request error

    return Promise.reject(error);
  });

// Implement a response interceptor
axiosPrivate.interceptors.response.use(function (response) {

    // This function is triggered by any status code that falls within the range of 2xx.

    // Perform some action with response data

    return response;
  }, function (error) {

    // This function is triggered whenever a status code falls outside the range of 2xx.

    // Do something with error response

    if(error.response.status === 403){

        // refresh token 

        // Revalidate token
    }
    return Promise.reject(error);
  });

  export default axiosPrivate;