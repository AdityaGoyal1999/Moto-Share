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

function createData(BikeID, name, username, Location, Cost) {
    return { BikeID, name, username, Location, Cost};
}

const rows = [
    createData('11100', 'Brad Stevens', 'bstev' , '60 Sample Way, A1B2C3, Alberta', '200'),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell >Bike ID</TableCell>
                        <TableCell >Owner Name</TableCell>
                        <TableCell >Owner User Name</TableCell>
                        <TableCell >Location</TableCell>
                        <TableCell >Province</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell >{row.BikeID}</TableCell>
                            <TableCell >{row.name}</TableCell>
                            <TableCell >{row.username}</TableCell>
                            <TableCell >{row.Location}</TableCell>
                            <TableCell >${row.Cost}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
