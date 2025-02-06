import { useState } from "react";
import Button from "./Button";

function Joke() {
    const [joke, setJoke] = useState("");
    const [error, setError] = useState("");

    const url = "https://api.api-ninjas.com/v1/jokes";

    const HandleApiCall = async () => {
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'mJuX8eALoemAuD8NW36boQ==Hsjx9c7fFgKLoShK'
                }
            });
            response = await response.json();
            if (response[0]?.joke) {
                setJoke(response[0]?.joke);
                setError("");
            } else {
                setError("Error: Unable to fetch joke.");
            }
        } catch (e) {
            setError("Error: " + e.message);
        }
    };

    return (
        <>
            <div className="joke">
                <Button HandleApiCall={HandleApiCall} />
                <br /><br />
                <p>{joke ? joke : error}</p>
            </div>
        </>
    );
}

export default Joke;
