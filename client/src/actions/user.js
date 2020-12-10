import axios from "axios";

// The SERVER_BASE_URL environment variable should be defined when deploying
axios.defaults.baseURL = process.env.SERVER_BASE_URL || "http://localhost:5000";


/* Helper function (not exported) to make requests and return the result in a
 * uniform format. */
const axiosRequest = (method, url, data) => {
    const config = { method: method, url: url, data: data };
    return axios
      .request(config)
      .then((response) => {
        return { responseData: response.data, errorMessage: "" };
      })
      .catch((error) => {
        return { responseData: null, errorMessage: error.response.data.error };
      });
  };
  

export const addUser = (payload) => {
    const returnVal = axiosRequest("POST", "/api/users", payload);
    return returnVal;
};

export const login = (payload) => {
    const returnVal = axiosRequest("POST", "/api/users/login", payload);
    
    // console.log("before "+ app.state.currentUser)
    // app.setState(returnVal)
    // console.log("after "+ app.state.currentUser)
    // console.log("return "+ returnVal.currentUser)
    return returnVal;
};

export const getUserByID = (id) => {
    const returnVal = axiosRequest("GET", "/api/users/" + id);
    return returnVal;
};

export const addReview = (id, payload) => {
    const returnVal = axiosRequest("POST", "/api/users/" + id + "/reviews", payload);
    return returnVal;
};

export const deleteUserByID = (id) => {
    const returnVal = axiosRequest("DELETE", "/api/users/" + id);
    return returnVal;
};

export const checkSession = (app) => {
    const returnVal = axiosRequest("GET", `/api/users/check-session`);
    return returnVal;
}


// Send a request to check if a user is logged in through the session cookie
// export const checkSession = (app) => {
//     const url = `/api/users/check-session`;

//     fetch(url)
//     .then(res => {
//         if (res.status === 200) {
//             return res.json();
//         }
//     })
//     .then(json => {
//         if (json && json.currentUser) {
//             app.setState({ currentUser: json.currentUser });
//         }
//     })
//     .catch(error => {
//         console.log(error);
//     });
  
// };

// export const getUsers = (userList) => {
    
//     // the URL for the request
//     const url = "/api/users";

//     fetch(url)
//         .then(res => {
//             if (res.status === 200) {
//                 // return a promise that resolves with the JSON body
//                 return res.json();
//             } else {
//                 alert("Could not get users");
//             }
//         })
//         .then(json => {
//             // the resolved promise with the JSON body
//             userList.setState({ userList: json.users });
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };

// // A function to send a POST request with a new student
// export const addUser2 = (formComp) => {
//     // the URL for the request
//     const url = "/api/users";

//     // Create our request constructor with all the parameters we need
//     const request = new Request(url, {
//         method: "post",
//         body: JSON.stringify(formComp),
//         headers: {
//             Accept: "application/json, text/plain, */*",
//             "Content-Type": "application/json"
//         }
//     });
//     console.log(formComp)
//     // Send the request with fetch()
//     fetch(request)
//         .then(function (res) {

//             // Handle response we get from the API.
//             if (res.status === 200) {

//             } else {

//             }
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };