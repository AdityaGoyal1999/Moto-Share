import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// GET ALL BIKES API CALL
const bikes = [
    {
        "reviews": [
            "Review string"
        ],
        "prevRenters": [],
        "_id": "5fd291fbc732a14b0883f7bd",
        "name": "name string",
        "price": 10,
        "location": "new location details",
        "licence": "licence plate string",
        "description": "Description of Bike",
        "image_id": "new image_id string",
        "image_url": "image_url string",
        "owner": "5fd28ef0c732a14b0883f7bb",
        "__v": 1,
        "rating": 5
    },
    {
        "reviews": [],
        "prevRenters": [],
        "_id": "5fd2e633604f214d40b220e9",
        "name": "kawasaki",
        "price": 5,
        "location": "location details",
        "licence": "licence plate string",
        "description": "Description of Bike",
        "image_id": "image_id string",
        "image_url": "image_url string",
        "owner": "5fd28ef0c732a14b0883f7bb",
        "__v": 0
    },
    {
        "reviews": [],
        "prevRenters": [],
        "_id": "5fd2e642604f214d40b220ea",
        "name": "motoshare",
        "price": 5,
        "location": "location details",
        "licence": "licence plate string",
        "description": "Description of Bike",
        "image_id": "image_id string",
        "image_url": "image_url string",
        "owner": "5fd28ef0c732a14b0883f7bb",
        "__v": 0
    },
    {
        "reviews": [],
        "prevRenters": [],
        "_id": "5fd2e6a0604f214d40b220eb",
        "name": "Harley Davidson",
        "price": 5,
        "location": "location details",
        "licence": "licence plate string",
        "description": "Description of Bike",
        "image_id": "image_id string",
        "image_url": "image_url string",
        "owner": "5fd28ef0c732a14b0883f7bb",
        "__v": 0
    },
    {
        "reviews": [],
        "prevRenters": [],
        "_id": "5fd3c2f846cd40375c8c7bcf",
        "name": "Bike",
        "price": 5,
        "availabilityStart": "2020-02-02T00:00:00.000Z",
        "availabilityEnd": "2020-02-03T00:00:00.000Z",
        "location": "Winnipeg",
        "licence": "ksdjnf",
        "description": "A real good bike",
        "image_id": "yeirxbewxirapk6lzyd6",
        "image_url": "http://res.cloudinary.com/jblcloud/image/upload/v1607713508/yeirxbewxirapk6lzyd6.png",
        "owner": "5fd3c27046cd40375c8c7bce",
        "__v": 0
    }
]

const handleClick = event => {
    let val = event.target.innerText
    val = prompt(`Enter a new value for ${val}`, val)
    if (val) {
        // update value in table
        event.target.removeChild(event.target.firstChild)
        event.target.appendChild(document.createTextNode(val))

        // update value in database
        const parent = event.target.parentElement
        const _id = parent.querySelector('._id').innerText
        const bikeData = {
            name: parent.querySelector('.name').innerText,
            availabilityStart: parent.querySelector('.availabilityStart').innerText,
            availabilityEnd: parent.querySelector('.availabilityEnd').innerText,
            location: parent.querySelector('.location').innerText,
            licence: parent.querySelector('.licence').innerText,
            price: parent.querySelector('.price').innerText.slice(1)
        }
        // send api call to update user above
        console.log(bikeData) 
    }
}

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell >Bike ID</TableCell>
                        <TableCell >Owner ID</TableCell>
                        <TableCell >Bike Name</TableCell>
                        <TableCell >Availability Start</TableCell>
                        <TableCell >Availability End</TableCell>
                        <TableCell >Location</TableCell>
                        <TableCell >Description</TableCell>
                        <TableCell >Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody onClick={handleClick}>
                    {bikes.map((bike) => (
                        <TableRow key={bike._id}>
                            <TableCell className='_id'>{bike._id}</TableCell>
                            <TableCell className='_id'>{bike.owner}</TableCell>
                            <TableCell className='name'>{bike.name}</TableCell>
                            <TableCell className='availabilityStart'>{bike.availabilityStart}</TableCell>
                            <TableCell className='availabilityEnd'>{bike.availabilityEnd}</TableCell>
                            <TableCell className='location'>{bike.location}</TableCell>
                            <TableCell className='licence'>{bike.licence}</TableCell>
                            <TableCell className='price'>{'$' + bike.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
