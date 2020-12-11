import axios from "axios";
import {getBikeByID} from './bike'

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

    // the URL for the request
    const url = "/api/users";

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(payload),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    return fetch(request)
        // .then(res => {
        //     if (res.status === 200) {
        //         // return a promise that resolves with the JSON body
        //         return res.json();
        //     } else {
        //         alert("Could not get users");
        //     }
        // })
        // .then(json => {
        //     // console.log("json", json, json.password, json.email)
        //     // console.log("payload", payload.password, payload.email)
        //     const pload = {
        //         email: payload.email,
        //         password: payload.password
        //     }
        //     login(pload)
        // })
        // .catch(error => {
        //     console.log(error);
        // });
};

export const getUserByID = (app, id) => {
    const url = "/api/users/"+id;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get user");
            }
        })
        .then(json => {
            app.setState({
                user_id: json._id,
                name: json.name,
                location: json.location,
                rentedTo: json.rentedTo,
                rating: json.rating,
            });

            for (let i = 0; i < json.bikes.length; i++) {
                app.setState({
                    bikes: [...app.state.bikes, json.bikes[i]]
                })
            }

            for (let i = 0; i < json.reviews.length; i++) {
                app.setState({
                    reviews: [...app.state.reviews, json.reviews[i]]
                })
            }

        })
        .catch(error => {
            console.log(error);
        });
};


export const getUserBikesByID = async (app, id) => {
    const url = "/api/users/"+id;

    return await fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get user");
            }
        })
        .then(json => {
            app.setState({
                num_bikes: json.bikes.length
            })

            for (let i = 0; i < json.bikes.length; i++) {
                console.log(json.bikes[i])
                getBikeByID(app, json.bikes[i])
            }

        })
        .catch(error => {
            console.log(error);
        });
};


// export const addReview = (id, payload) => {
//     return axiosRequest("POST", "/api/users/" + id + "/reviews", payload);
// };

// export const deleteUserByID = (id) => {
//     return axiosRequest("DELETE", "/api/users/" + id);
// };


export const login = (payload) => {
    
    // the URL for the request
    const url = "/api/users/login";

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(payload),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });


    // const obj = null
    return fetch(request)
        // .then(res => {
        //     if (res.status === 200) {
        //         // return a promise that resolves with the JSON body
        //         return res.json();
        //     } else {
        //         return res.status
        //     }
        // });
};


export const logoutUser = async () => {
    
    // the URL for the request
    const url = "/api/users/logout";

    // const obj = null
    await fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                console.log("logged out user")
            } else {
                console.log("ERROR")
                return res.status
            }
        }).catch(error => {
            console.log("ERROR in logout")
        })
};

// Send a request to check if a user is logged in through the session cookie
export const checkSession = async (app) => {
    const url = `/api/users/check-session`;

    await fetch(url)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            return {currentUser: null}
        }
    })
    .then(json => {
        if (json && json.currentUser) {
            app.setState({ currentUser: json.currentUser });
        }
    })
    .catch(error => {
        // console.log(error);
    });
  
};


// export const getUserByID = (id) => {
//     const url = `/api/users/`+id;
//
//     fetch(url)
//     .then(res => {
//         if (res.status === 200) {
//             return res.json();
//         }
//     })
//     .then(json => {
//
//     })
//     .catch(error => {
//         console.log(error);
//     });
//
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