import styled from "styled-components";
import {Joke} from "../interfaces/Jokes.ts";
import App from ".././App.tsx";

const JokesPreviewDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

export default function JokeContent(props : { data:Joke[] } ){

    return (
        
        <JokesPreviewDiv>
            {
                props.data.map((joke: Joke) =>
                    <div key = {joke.id}>
                        <h1>{joke.type}</h1>
                        <p>{joke.setup}</p>
                        <p>{joke.punchline}</p>
                    </div>
                )
            }
        </JokesPreviewDiv>
    );

}
