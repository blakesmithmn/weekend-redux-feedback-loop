import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState, setState } from 'react';

// MUI IMPORTS
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


function Comments() {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const handleComment = () => {
        console.log(comment);
        const action = {
            type: 'COMMENTS_INPUT',
            payload: comment
        }
        dispatch(action);
    }

    return (
        <Card sx={{ maxWidth: 500 }} className="feedbackCard">
            <CardContent>
                <Typography variant='h5'>Anything you'd like to add?</Typography>
            </CardContent>
            <CardContent>
                <TextField variant='outlined' label="comments and concerns" value={comment} onChange={(event) => setComment(event.target.value)} fullWidth></TextField>
            </CardContent>
            <CardActions>
                <Button variant='outlined' onClick={handleComment}>
                    <Link to="/review">
                        Next
                    </Link>
                </Button>
            </CardActions>
        </Card >
    )
}

export default Comments;