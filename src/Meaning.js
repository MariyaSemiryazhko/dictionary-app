import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
    return (
        <div className="meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            <p> <strong> Definition: </strong> {props.meaning.definition}</p>
            <Examples example={props.meaning.example}/>
            <br />
            <Synonyms synonyms={props.meaning.synonyms} />
            
        </div>
    )
}