


function Button({HandleApiCall}){
    return(
        <>
        <button className="btn"  onClick={HandleApiCall}>Generate a Random Joke</button>
        </>
    )
}

export default Button;