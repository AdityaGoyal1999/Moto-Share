
// Add Bike to user
export const addBike = (payload, id) => {

    // the URL for the request
    const url = "/api/bikes/user/"+id;


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
export const getBikeByID = async (app, id) => {

    // the URL for the request
    const url = "/api/bikes/"+id;

    return await fetch(url)
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
            bikes_info: [...app.state.bikes_info, json]
        })
    })
    .catch(error => {
        console.log(error);
    });
        
};

// Add Bike to user
export const deleteBikeById = async (id) => {

    // the URL for the request
    const url = "/api/bikes/"+id;

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "delete",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    return await fetch(request)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            alert("Could not get bike");
        }
    })
    .then(json => {

    })
    .catch(error => {
        console.log(error);
    });
        
};

export const searchBikes = async (app, payload) => {
    // the URL for the request
    const url = "/api/bikes/search";

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(payload),
    })

    return await fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get bike");
            }
        })
        .then(json => {
            
            for (let i = 0; i < json.length; i++) {
                app.setState({
                    ads: [...app.state.ads, json[i]]
                })
            }
    
        })
        .catch(error => {
            console.log(error);
        });
};

export const rentBikeById = async (id, uid) => {
    const url = `/api/bikes/${id}/rent`

    let bodyY = {uid: uid}
    const request = new Request(url, {
        method: 'post',
        body: JSON.stringify(bodyY),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    return await fetch(request)
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            console.log(res)
            alert('Could not rent bike')
        }
    })
    .catch(error => console.log(error))
}
