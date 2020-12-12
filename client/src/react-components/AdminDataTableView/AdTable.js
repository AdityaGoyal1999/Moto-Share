import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getAllBikes} from '../../actions/bike'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// GET ALL BIKES API CALL
const bikes = []
getAllBikes().then(result => {
    if (res) {
        bikes = result
    }
})

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
