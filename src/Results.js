import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js"


export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section>
                <h3 className="word" >{props.results.word}</h3>
                <Phonetics phonetic={props.results.phonetic}/>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section key={index}>
                            <Meaning meaning={meaning} />
                        </section>
                    );
                })}
                    </section>
            </div>
        )
    } else {
        return null;
    }
}