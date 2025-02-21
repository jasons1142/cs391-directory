import JokeContent from './components/Jokes.tsx';
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Joke} from "./interfaces/Jokes.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App() {

  const [data, setData] = useState<Joke[]>([]);

  // useEffect Hook for error handling and re-rendering.
  useEffect(() => {
      async function fetchData(): Promise<void> {
          const rawData = await fetch("https://official-joke-api.appspot.com/random_joke");
          const {results} : {results: Joke[]} = await rawData.json();
          setData(results);
      }
      fetchData()
          .then(() => console.log("Data fetched successfully"))
          .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);


  return (
    <ParentDiv>
      <JokeContent data={data}/>
    </ParentDiv>
    
  )
}


