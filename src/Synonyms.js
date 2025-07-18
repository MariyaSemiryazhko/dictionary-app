import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div>
                <strong>Synonyms: </strong>
                <ul className="synonyms">
                    {props.synonyms.map(function (synonym, index) {
                        return <li key={index}>{synonym}</li>;
                    })}

                </ul>
            </div>
        )
    } else {
        return null;
    }
   
}