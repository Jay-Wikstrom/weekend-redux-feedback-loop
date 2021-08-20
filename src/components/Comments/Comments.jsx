import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
    const comments = useSelector(store => store.mainReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const [commentsInput, setCommentsInput] = useState('');

    const handleSubmit = () => {
        dispatch({
            type: 'SET_COMMENTS',
            payload: commentsInput
        })
        history.push('/review');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
                <label>Comments</label>
                <input
                    value={commentsInput}
                    onChange={e => setCommentsInput(e.target.value)}
                />
                <button>Next</button>
            </form>
        </div>
    )
}

export default Comments;