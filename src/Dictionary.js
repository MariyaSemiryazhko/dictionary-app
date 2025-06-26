import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results.js"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);


    function handleResponse(response) {
        setResults(response.data);
    }


    function Search(event) {
        event.preventDefault();

        //documentation: https://www.shecodes.io/learn/apis/dictionary
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=21b0o158462fba6c2a0f6eca1t37c8ec`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }



    return (
        <div className="Dictionary">
            <form className="dictionary-form" onSubmit={Search}>
            <label for="word">Enter a word</label>
                <input type="search"  placeholder="e.g., serendipity" onChange={handleKeywordChange}/>
                <button type="submit">Search</button>    
            </form>
            <Results results={results} />
        </div>
    ) 
}