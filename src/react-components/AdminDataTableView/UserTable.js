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

function createData(name, username, Street_Address, Postal_Code, Province) {
    return { name, username, Street_Address, Postal_Code, Province};
}

const rows = [
    createData('Brad Stevens', 'bstev' , '60 Sample Way', 'A1B2C3', 'Alberta'),
];
export default function BasicTable() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} >
                <TableHead>
                    <TableRow>
                        <TableCell >Full Name</TableCell>
                        <TableCell >Username</TableCell>
                        <TableCell >Street Address</TableCell>
                        <TableCell >Postal Code</TableCell>
                        <TableCell >Province</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell >{row.name}</TableCell>
                            <TableCell >{row.username}</TableCell>
                            <TableCell >{row.Street_Address}</TableCell>
                            <TableCell >{row.Postal_Code}</TableCell>
                            <TableCell >{row.Province}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
