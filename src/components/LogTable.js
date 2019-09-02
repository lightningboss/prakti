import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    overflowScroll: {
        overflowX: 'scroll',
    },
    idField: {
        maxWidth: 10,
        padding: '0 10px',
    },
});

const LogTable = ({ log }) => {
    const classes = useStyles();
    return (
        <Box mb={1}>
            <Paper>
                <Box p={1} height={150} className={classes.overflowScroll}>
                    <Table stickyHeader size="small">
                        <TableBody>
                            {log.map(entry => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={entry.id}>
                                    <TableCell className={classes.idField}>{entry.id}</TableCell>
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
