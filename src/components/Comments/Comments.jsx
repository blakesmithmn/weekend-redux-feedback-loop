import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState, setState } from 'react';

// MUI IMPORTS
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';



function Comments() {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleComment = () => {
        console.log(comment);
        const action = {
            type: 'COMMENTS_INPUT',
            payload: comment
        }
        dispatch(action);
        history.push('/review')
    }

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={10} sm={10} md={10}>

                <Card className="feedbackCard">
                    <CardContent>
                        <Typography variant='h5'>Anything you'd like to add?</Typography>
                    </CardContent>
                    <CardContent>
                        <TextField variant='outlined' label="comments and concerns" value={comment} onChange={(event) => setComment(event.target.value)} fullWidth></TextField>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => history.push('/three')}>
                            PREV
                        </Button>
                        <Button variant='outlined' onClick={handleComment}>
                            Next
                        </Button>
                    </CardActions>
                    <CardContent>
                        <LinearProgress variant="determinate" value={60} />
                    </CardContent>
                </Card >
            </Grid>
        </Grid>
    )
}

export default Comments;