import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            <p> <strong> Definition: </strong> {props.meaning.definition}</p>
            <p className="example-text"> <strong> Example: </strong> {props.meaning.example}</p>
            <br />
            <Synonyms synonyms={props.meaning.synonyms} />
            
        </div>
    )
}