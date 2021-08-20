function Feeling(){

    const handleSubmit =() =>{
        console.log('Feeling submitted');
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
                />
                <button>Next</button>
            </form>
        </div>
    )
}

export default Feeling;
