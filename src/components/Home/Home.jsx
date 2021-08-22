import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Home(){
    const history = useHistory();

    const handleSubmit = () => {
        // Take user to next page
        history.push('/feeling');
    }
    return (
        <div>
            <h1>Start Feedback Survey</h1>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Start
            </Button>
        </div>
    )
}

export default Home;