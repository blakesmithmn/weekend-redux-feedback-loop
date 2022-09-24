import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useState, setState } from 'react';
import axios from 'axios';
// MUI IMPORTS
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

function Review() {
    const feedback = useSelector(store => store.feedbackReducer);
    const handleSubmit = () => {
        console.log('State thing');
        // POST ROUTE
    }
    return (
        <Card sx={{ maxWidth: 500 }} className="feedbackCard">
            <CardContent>
                <Typography variant='h5'>Review</Typography>
            </CardContent>
            <CardContent>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling Rating:</TableCell>
                                <TableCell>Understanding Rating:</TableCell>
                                <TableCell>Support Rating:</TableCell>
                                <TableCell>Comments:</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{feedback.feeling}</TableCell>
                                <TableCell>{feedback.understanding}</TableCell>
                                <TableCell>{feedback.support}</TableCell>
                                <TableCell>{feedback.comments}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
            <CardActions>
                <Button variant='outlined' onClick={handleSubmit}>
                    <Link to="/">
                        Submit
                    </Link>
                </Button>
            </CardActions>
        </Card >
    )
};

export default Review;