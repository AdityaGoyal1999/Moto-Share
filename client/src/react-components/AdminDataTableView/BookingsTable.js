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
        minWidth: 850,
    },
});

function createData(BikeId, username, Location, Date_out, Time_out, Date_in, Time_in) {
    return {BikeId, username, Location, Date_out, Time_out, Date_in, Time_in};
}

const rows = [
    createData('11010', 'bstev' , '60 Sample Way, A1B2C3, Alberta', '10-01-2020', '11:00', '10-13-2020', '13:00'),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell >Bike ID</TableCell>
                        <TableCell >Owner User Name</TableCell>
                        <TableCell >Location</TableCell>
                        <TableCell >Date Borrowed</TableCell>
                        <TableCell >Time Borrowed</TableCell>
                        <TableCell >Date Returned</TableCell>
                        <TableCell >Time Returned</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell >{row.BikeId}</TableCell>
                            <TableCell >{row.username}</TableCell>
                            <TableCell >{row.Location}</TableCell>
                            <TableCell >{row.Date_out}</TableCell>
                            <TableCell >{row.Time_out}</TableCell>
                            <TableCell >{row.Date_in}</TableCell>
                            <TableCell >{row.Time_in}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
