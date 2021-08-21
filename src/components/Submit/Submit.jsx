import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Submit(){
    const history = useHistory();
    const dispatch = useDispatch();
    
    const resetFeedback = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK'
        });
        history.push('/');
    }
    
    return (
        <div>
            <h2>Thank You!!</h2>
            <button onClick={resetFeedback}>Leave New Feedback</button>
        </div>
    )
}
export default Submit;