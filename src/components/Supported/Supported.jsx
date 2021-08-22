import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Container, TextField, Paper, Grid, makeStyles } from '@material-ui/core';

function Supported() {
    const support = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState('');

    const handlePrev = () => {
        history.push('/understanding');
    }

    const handleSubmit = () => {
        if (supportInput === '') {
            alert('Please enter a number between 1-6');
        } else {
            dispatch({
                type: 'SET_SUPPORT',
                payload: supportInput
            })
            history.push('/comments');
        }
    }

    const useStyles = makeStyles({
        field: {
            padding: 10
        }
    })
    const classes = useStyles()

    return (
        <Container maxWidth="sm">
            <Paper elevation={0} className="formContainer">
                <Grid container spacing={3} justify="center" item xs={12}>
                    <h2>How well are you being supported?</h2>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="filled-number"
                            label="Enter 1 - 6"
                            type="number"
                            variant="standard"
                            className={classes.field}
                            InputProps={{inputProps: {min: 1, max: 6} }}
                            type="number"
                            min="1"
                            max="6"
                            value={supportInput}
                            onChange={e => setSupportInput(e.target.value)}
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

export default Supported;