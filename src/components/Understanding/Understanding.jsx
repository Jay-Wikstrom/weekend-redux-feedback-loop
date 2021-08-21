import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
    const understanding = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingInput, setUnderstandingInput] = useState('');

    const handlePrev = () => {
        history.push('/feeling');
    }

    const handleSubmit = () => {
        if (understandingInput === '') {
            alert('Please enter a number between 1-6');
        } else {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understandingInput
            })
            history.push('/supported');
        }
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit}>
                <label>Understanding?</label>
                <input
                    type="number"
                    min="1"
                    max="6"
                    value={understandingInput}
                    onChange={e => setUnderstandingInput(e.target.value)}
                />
            </form>
            <button onClick={handlePrev}>Previous Page</button>
            <button onClick={handleSubmit}>Next Page</button>
        </div>
    )
}

export default Understanding;