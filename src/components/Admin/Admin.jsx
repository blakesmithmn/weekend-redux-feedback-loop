import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useState, setState, useEffect } from 'react';
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
// MUI ALERT
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Admin() {
    useEffect(() => {
        fetchFeedback();
    }, []);
    // GET ROUTE TO VIEW SERVER INFO
    const [feedbackArray, setFeedbackArray] = useState([]);
    const [open, setOpen] = useState(false);

    const fetchFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
            .then(response => {
                console.log(response);
                setFeedbackArray(response.data);
            })
            .catch(error => {
                console.log('Error in GET:', error);
            })
    }
    // DELETE ROUTE FOR TABLE ID's

    const handleDelete = (id) => {
        console.log(id);
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        })
            .then(response => {
                fetchFeedback();
            })
            .catch(error => {
                console.log('Error in admin DELETE:', error);

            })

    }

    return (

        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={3}>

                <Card sx={{ maxWidth: 850 }} className="feedbackCard" raised>
                    <CardContent>
                        <Typography variant='h5' color='primary.dark'>ADMIN VIEW:</Typography>
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
                                    {feedbackArray.map((response) => {
                                        return (
                                            <TableRow key={response.id}>
                                                <TableCell>{response.feeling}</TableCell>
                                                <TableCell>{response.understanding}</TableCell>
                                                <TableCell>E{response.support}</TableCell>
                                                <TableCell>{response.comments}</TableCell>
                                                <TableCell>
                                                    <Button color='error' variant='outlined' onClick={() => { handleDelete(response.id) }}>
                                                        DELETE
                                                    </Button>
                                                </TableCell>

                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
};

export default Admin;