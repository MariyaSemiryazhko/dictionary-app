import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");


    function Search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
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
        </div>
    ) 
}