import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Paper, Grid, makeStyles } from '@material-ui/core';

function Review() {
    const feedback = useSelector(store => store.feedbackReducer);
    console.log(feedback);
    const history = useHistory();

    let feedbackObject = {
        feeling: feedback[0],
        understanding: feedback[1],
        support: feedback[2],
        comments: feedback[3]
    }

    const handlePrev = () => {
        history.push('/comments');
    }

    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackObject
        }).then((response) => {
            console.log(response);
        }).catch((error)=> {
            console.log('Post error', error);
        })
        history.push('/submit');
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={0} className="formContainer">
                

        <h1>Review</h1>
            <h3>Feelings: {feedbackObject.feeling}</h3>
            <h3>Understanding: {feedbackObject.understanding}</h3>
            <h3>Support: {feedbackObject.support}</h3>
            <h3>Comments: {feedbackObject.comments}</h3>
                
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