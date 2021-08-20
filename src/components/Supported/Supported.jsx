function Supported() {
    const handleSubmit = () => {
        console.log('Supported submitted');
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSubmit}>
                <label>Support?</label>
                <input
                    type="number"
                />
                <button>Next</button>
            </form>
        </div>
    )
}

export default Supported;