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

// GET USERS HERE API CALL
const users = [
    {
        "reviews": [],
        "bikes": [
            "5fd3c2f846cd40375c8c7bcf",
            "5fd3c2f846cd40375c8c7bcf",
            "5fd3c2f846cd40375c8c7bcf",
            "5fd3c2f846cd40375c8c7bcf"
        ],
        "_id": "5fd3c27046cd40375c8c7bce",
        "email": "a@a.com",
        "password": "$2a$10$gaZWRhxivVyhoVdNEmpXN.NrPS98AUU.a9QGTLFKWpnLL1dM4853O",
        "name": "Julien",
        "location": "",
        "rating": 0,
        "rentedTo": 0,
        "__v": 1
    },
    {
        "reviews": [],
        "bikes": [
            "5fd3c2f846cd40375c8c7bcf"
        ],
        "_id": "5fd3c27046cd40375c8c7bce",
        "email": "a@a.com",
        "password": "$2a$10$gaZWRhxivVyhoVdNEmpXN.NrPS98AUU.a9QGTLFKWpnLL1dM4853O",
        "name": "Julien",
        "location": "",
        "rating": 0,
        "rentedTo": 0,
        "__v": 1
    },
    {
        "reviews": [],
        "bikes": [
            "5fd3c2f846cd40375c8c7bcf"
        ],
        "_id": "5fd3c27046cd40375c8c7bce",
        "email": "a@a.com",
        "password": "$2a$10$gaZWRhxivVyhoVdNEmpXN.NrPS98AUU.a9QGTLFKWpnLL1dM4853O",
        "name": "Julien",
        "location": "",
        "rating": 0,
        "rentedTo": 0,
        "__v": 1
    }
]

const handleClick = event => {
    // prevent editing ids
    if (event.target.classList.contains('_id')) {
        return
    }
    let val = event.target.innerText
    val = prompt(`Enter a new value for ${val}`, val)
    if (val) {
        // update value in table
        event.target.removeChild(event.target.firstChild)
        event.target.appendChild(document.createTextNode(val))

        // update value in database
        const parent = event.target.parentElement
        const _id = parent.querySelector('._id').innerText
        const userData = {
            name: parent.querySelector('.name').innerText,
            email: parent.querySelector('.email').innerText,
            location: parent.querySelector('.location').innerText,
            rating: parent.querySelector('.rating').innerText,
            rentedTo: parent.querySelector('.rentedTo').innerText
        }
        // send api call to update user above
        console.log(userData) 
    }
}

export default function BasicTable() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} >
                <TableHead>
                    <TableRow>
                        <TableCell >ID</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Location</TableCell>
                        <TableCell >Rating</TableCell>
                        <TableCell >Rented To</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody onClick={handleClick}>
                    {users.map((user) => (
                        <TableRow key={user._id}>
                            <TableCell className='_id'>{user._id}</TableCell>
                            <TableCell className='name'>{user.name}</TableCell>
                            <TableCell className='email'>{user.email}</TableCell>
                            <TableCell className='location'>{user.location}</TableCell>
                            <TableCell className='rating'>{user.rating}</TableCell>
                            <TableCell className='rentedTo'>{user.rentedTo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
