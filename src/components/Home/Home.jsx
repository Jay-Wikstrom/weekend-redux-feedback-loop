import { useHistory } from 'react-router-dom';

function Home(){
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/feeling');
    }
    return (
        <div>
            <h1>Start Feedback</h1>
            <button onClick={handleSubmit}>Go to Feeling page</button>
        </div>
    )
}

export default Home;