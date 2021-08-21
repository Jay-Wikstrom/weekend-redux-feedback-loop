import {React, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling(){
    const feeling = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const [feelingInput, setFeelingInput] = useState('');

    const handlePrev = () => {
        history.push('/');
    }

    const handleSubmit = () => {
        if (feelingInput === ''){
            alert('Please enter a number between 1-6');
        } else {
            dispatch({
                    type: 'SET_FEELING',
                    payload: feelingInput
                })
            history.push('/understanding');
        }
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <label>Feeling?</label>
                <input 
                    type="number"
                    min="1"
                    max="6"
                    value={feelingInput}
                    onChange={e => setFeelingInput(e.target.value)}
                />
            </form>
            <button onClick={handlePrev}>Previous Page</button>
            <button onClick={handleSubmit}>Next Page</button>
        </div>
    )
}

export default Feeling;
