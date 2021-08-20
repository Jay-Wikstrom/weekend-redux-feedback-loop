function Comments() {
    const handleSubmit = () => {
        console.log('Comments submitted');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
                <label>Comments</label>
                <input
                    
                />
                <button>Next</button>
            </form>
        </div>
    )
}

export default Comments;