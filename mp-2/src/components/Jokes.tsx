import {styled} from "styled-components";
import {Joke} from "../interfaces/Dogs.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleJokeDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.status === "Alive" ? 'darkorange' : 'black')};
    color: ${(props) => (props.status !== "Alive" ? 'white' : 'black')};
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function Dogs(props : { data:Joke[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Joke) =>
                    <SingleJokeDiv key={char.id} status={char.type}>
                        <h1>{char.setup}</h1>
                        <p>{char.punchline !== "Human" ? "(Not Human)" : ""}</p>
                        <img src={char.punchline} alt={`image of ${char.punchline}`} />
                    </SingleJokeDiv>
                )
            }
        </AllCharsDiv>
    );
}