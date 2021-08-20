import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Supported() {
    const support = useSelector(store => store.mainReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState('');

    const handleSubmit = () => {
        dispatch({
            type: 'SET_SUPPORT',
            payload: supportInput
        })
        history.push('/comments');
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSubmit}>
                <label>Support?</label>
                <input
                    type="number"
                    min="1"
                    max="6"
                    value={supportInput}
                    onChange={e => setSupportInput(e.target.value)}
                />
                <button>Next</button>
            </form>
        </div>
    )
}

export default Supported;