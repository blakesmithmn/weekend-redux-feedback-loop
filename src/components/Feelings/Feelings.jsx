import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState, setState } from 'react';
// MUI IMPORTS
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

function Feelings() {
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();

    const handleFeelings = () => {
        console.log(rating);
        const action = {
            type: 'FEELING_INPUT',
            payload: rating
        }
        dispatch(action);
    };

    return (
        <Card sx={{ maxWidth: 500 }} className="feedbackCard">
            <CardContent>
                <Typography variant='h5'>How are you Feeling Today?</Typography>
            </CardContent>
            <CardContent>
                <RadioGroup name="supportedradio">
                    <FormControlLabel control={<Radio />} label="1 - Horrible" value="1" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                    <FormControlLabel control={<Radio />} label="2 - Could be Better" value="2" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                    <FormControlLabel control={<Radio />} label="3 -  Not too Shabby" value="3" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                    <FormControlLabel control={<Radio />} label="4 - Above Average" value="4" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                    <FormControlLabel control={<Radio />} label="5 -  Great!" value="5" onChange={(event) => setRating(event.target.value)}></FormControlLabel>
                </RadioGroup>
            </CardContent>
            <CardActions>
                <Button variant='outlined' onClick={handleFeelings}>
                    <Link to="/two">
                        Next
                    </Link>
                </Button>
            </CardActions>
        </Card >
    )
}

export default Feelings;