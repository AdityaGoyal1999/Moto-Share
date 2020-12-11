
// Add Bike to user
export const addBike = (payload, id) => {

    // the URL for the request
    const url = "/api/bike/user/"+id;


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
        
};


// Add Bike to user
export const getBikeByID = (app, id) => {

    // the URL for the request
    const url = "/api/bike/user/"+id;

    fetch(url)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            alert("Could not get bike");
        }
    })
    .then(json => {
        app.setState({
            bikes: [...app.state.bike_info, json]
        })
    })
    .catch(error => {
        console.log(error);
    });
        
};