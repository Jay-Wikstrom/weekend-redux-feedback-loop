function Understanding() {
    const handleSubmit = () => {
        console.log('Understanding submitted');
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit}>
                <label>Understanding?</label>
                <input
                    type="number"
                />
                <button>Next</button>
            </form>
        </div>
    )
}

export default Understanding;