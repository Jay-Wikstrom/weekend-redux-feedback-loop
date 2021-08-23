import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Container, TextField, Paper, Grid, makeStyles} from '@material-ui/core';

function Comments() {
    const comments = useSelector(store => store.commentReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const [commentsInput, setCommentsInput] = useState('');

    // Take user to previous page
    const handlePrev = () => {
        history.push('/supported');
    }

    const handleSubmit = () => {
        // Dispatch to index.js
        dispatch({
            type: 'SET_COMMENTS',
            payload: commentsInput
        })
        // Take user to next page
        history.push('/review');
    }

    const useStyles = makeStyles({
        field: {
            //TextField padding and margin set to 10
            padding: 10,
            margin: 10,
        }
    })
    const classes = useStyles()

    return (
        <Container maxWidth="sm">
            <Paper elevation={0} className="formContainer">
                <Grid container spacing={3} justifyContent="center" item xs={12}>
                    <h2>Any comments you want to leave?</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <TextField
                            id="standard-multiline-flexible"
                            label="Enter your comments here"
                            type="text"
                            variant="outlined"
                            multiline
                            maxRows={6}
                            fullWidth
                            className={classes.field}
                            
                            value={commentsInput}
                            onChange={e => setCommentsInput(e.target.value)}
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

export default Comments;