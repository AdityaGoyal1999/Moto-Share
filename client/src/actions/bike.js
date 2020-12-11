
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