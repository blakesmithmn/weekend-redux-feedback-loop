import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState, setState } from 'react';

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

function Understanding() {
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleUnderstanding = () => {
        console.log(rating);
        const action = {
            type: 'UNDERSTANDING_INPUT',
            payload: rating
        }
        dispatch(action);
        history.push('/three');
    };

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 850 }} className="feedbackCard">
                    <CardContent>
                        <Typography variant='h5'>Are you Understanding the Content?</Typography>
                    </CardContent>
                    <CardContent>
                        <form onSubmit={handleUnderstanding}>
                            <RadioGroup name="supportedradio">
                                <FormControlLabel control={<Radio required />} label="1 - Horrible" value="1" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                                <FormControlLabel control={<Radio />} label="2 - Could be Better" value="2" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                                <FormControlLabel control={<Radio />} label="3 -  Not too Shabby" value="3" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                                <FormControlLabel control={<Radio />} label="4 - Above Average" value="4" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                                <FormControlLabel control={<Radio />} label="5 -  Great!" value="5" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                            </RadioGroup>
                            <Button type="submit" variant='outlined'>NEXT</Button>
                        </form>
                    </CardContent>
                </Card >
            </Grid>
        </Grid>
    )
}

export default Understanding;