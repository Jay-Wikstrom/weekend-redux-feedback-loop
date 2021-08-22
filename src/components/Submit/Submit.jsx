import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

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
            <Button 
                variant="contained"
                color="primary"
                onClick={resetFeedback}
            >
                Leave New Feedback
            </Button>
        </div>
    )
}
export default Submit;