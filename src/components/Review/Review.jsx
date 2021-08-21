import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Review() {
    const feedback = useSelector(store => store.mainReducer);
    console.log(feedback);
    const history = useHistory();

    let feedbackObject = {
        feeling: feedback[0],
        understanding: feedback[1],
        support: feedback[2],
        comments: feedback[3]
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
        <div>
            <h1>Review</h1>
                <h3>Feelings: {feedbackObject.feeling}</h3>
                <h3>Understanding: {feedbackObject.understanding}</h3>
                <h3>Support: {feedbackObject.support}</h3>
                <h3>Comments: {feedbackObject.comments}</h3>
            <button onClick={handleSubmit}>Submit</button> 
        </div>
    )
}

export default Review;