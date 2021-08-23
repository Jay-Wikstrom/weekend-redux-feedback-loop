import {React, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Container, TextField, Paper, Grid, makeStyles } from '@material-ui/core';

function Feeling(){
    const feeling = useSelector(store => store.feelingReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const [feelingInput, setFeelingInput] = useState('');

    const handlePrev = () => {
        // Take user to previous page
        history.push('/');
    }


    const handleSubmit = () => {
        // Check to make sure input isn't empty
        if (feelingInput === '' || feelingInput > 7 || feelingInput < 0){
            alert('Please enter a number between 1-6');
        } else {
            // Dispatch to index.js
            dispatch({
                    type: 'SET_FEELING',
                    payload: feelingInput
                })
            // Take user to next page
            history.push('/understanding');
        }
    }

    const useStyles = makeStyles({
        field: {
            //TextField padding set to 10
            padding: 10
        }
    })
    const classes = useStyles()

    return (
        <Container maxWidth="sm">
            <Paper elevation={0} className="formContainer">
                <Grid container spacing={3} justifyContent="center" item xs={12}>
        
                    <h2>How are you feeling today?</h2>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="filled-number"
                            label="Enter 1 - 6"
                            type="number"
                            variant="standard"
                            className = {classes.field}
                            InputProps={{inputProps: {min: 1, max: 6} }}
                            value={feelingInput}
                            onChange={e => setFeelingInput(e.target.value)}
                        />
                    </form>
                </Grid>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handlePrev}
                >
                    Previous Page
                </Button>
                        
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Next Page
                </Button>

            </Paper>
        </Container>
    )
}

export default Feeling;
