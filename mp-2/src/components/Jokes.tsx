import {useEffect, useState} from "react"
import {styled} from "styled-components";
import {Joke} from "../interfaces/Jokes.ts";

const JokesPreviewDiv = styled.div`
    margin: 3rem;
    padding: 1rem;
    width: 20rem;
    background-color: blue;
`;

const JokesPreview = ({joke}: {joke: Joke}) => {
    return (
        <JokesPreviewDiv>
            <h3>{joke.type}</h3>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </JokesPreviewDiv>
    )
}

export default function JokeContent() {
    const [joke, setJoke] = useState<string | null>(null)
    const [jokes, setJokes] = useState<Joke[]>([])

    useEffect(() => {
        async function getJoke() {
            const res = await fetch(`https://official-joke-api.appspot.com/random_joke=${joke}`);
            const data = await res.json();
            setJokes(data.data);
        }
        getJoke();
    })

    return (
        <div>
            <button>Click Me!</button>
            <div>
                <p>joke: {joke}</p>
            </div>
        </div>
    )

}
