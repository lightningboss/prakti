import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    overflowScroll: {
        overflowX: 'scroll',
    },
});

const LogTable = ({ log }) => {
    const classes = useStyles();
    return (
        <Box my={2}>
            <Paper>
                <Box height={150} className={classes.overflowScroll}>
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>State</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {log.map(entry => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={entry.id}>
                                    <TableCell>{entry.currentState}</TableCell>
                                    <TableCell>{entry.action}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Paper>
        </Box>
    );
};

export default LogTable;
