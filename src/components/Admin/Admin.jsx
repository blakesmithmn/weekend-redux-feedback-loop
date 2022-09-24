import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useState, setState } from 'react';
import axios from 'axios';
// MUI IMPORTS
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// MUI TABLE
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Admin() {
    // DELETE ROUTE FOR TABLE ID's

    return (
        <TableContainer>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling Rating:</TableCell>
                        <TableCell>Understanding Rating:</TableCell>
                        <TableCell>Support Rating:</TableCell>
                        <TableCell>Comments:</TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>EXAMPLE REVIEW</TableCell>
                        <TableCell>EXAMPLE REVIEW</TableCell>
                        <TableCell>EXAMPLE REVIEW</TableCell>
                        <TableCell>EXAMPLE REVIEW</TableCell>
                        <TableCell>
                            <Button color='error' variant='outlined'>
                                DELETE
                            </Button>
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>EXAMPLE REVIEW</TableCell>
                        <TableCell>EXAMPLE REVIEW</TableCell>
                        <TableCell>EXAMPLE REVIEW</TableCell>
                        <TableCell>EXAMPLE REVIEW</TableCell>
                        <TableCell>
                            <Button color='error' variant='outlined'>
                                DELETE
                            </Button>
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>1/5</TableCell>
                        <TableCell>2/5</TableCell>
                        <TableCell>3/5</TableCell>
                        <TableCell>EXAMPLE REVIEW</TableCell>
                        <TableCell>
                            <Button color='error' variant='outlined'>
                                DELETE
                            </Button>
                        </TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default Admin;