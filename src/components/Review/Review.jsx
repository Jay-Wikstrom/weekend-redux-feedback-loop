import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Paper, Grid, makeStyles } from '@material-ui/core';

function Review() {
    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentReducer);
    const history = useHistory();

    const handlePrev = () => {
        // Take user to previous page
        history.push('/comments');
    }

    const handleSubmit = () => {
        // Send feedback to server
        axios({
            method: 'POST',
            url: '/feedback',
            data: { feeling, understanding, support, comments}
            //data: feedbackObject
        }).then((response) => {
            console.log(response);
        }).catch((error)=> {
            console.log('Post error', error);
        })
        // Take user to next page
        history.push('/submit');
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={0} className="formContainer">
                

        <h1>Review</h1>
            <h3>Feelings: {feeling}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comments}</h3>
                
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

export default Review;