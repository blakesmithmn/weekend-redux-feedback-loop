
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useState, setState } from 'react';
import Success from './giphy.gif';

// MUI IMPORTS
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ReplayIcon from '@mui/icons-material/Replay';


function Complete() {
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();

    // FORM RESET TO EMPTY OBJECT - AND BRING US BACK TO START
    const handleReset = () => {
        const action = {
            type: 'RESET_FORM',
        }
        dispatch(action);
        history.push('/');
    }

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 850 }} className="feedbackCard">
                    <CardContent>
                        <Typography variant='h5'>Thanks for your Feedback!</Typography>
                    </CardContent>
                    <CardContent>
                        <img src={Success} />
                    </CardContent>
                    <CardContent>
                        <Button variant='outlined' onClick={handleReset}>
                            <ReplayIcon />
                            Start Over
                        </Button>
                    </CardContent>
                </Card >
            </Grid>
        </Grid>

    )
}

export default Complete;