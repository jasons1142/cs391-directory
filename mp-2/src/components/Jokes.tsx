import {useState} from "react"
import {styled} from "styled-components";
import {Joke} from "../interfaces/Jokes.ts";


export default function JokeContent() {
    const [joke, setJoke] = useState<string | null>(null)

    return (
        <div>
            <button>Click Me!</button>
            <div>
                <p>joke: {joke}</p>
            </div>
        </div>
    )

}
