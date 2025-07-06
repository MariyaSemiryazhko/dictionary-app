import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results.js"
import Photos from "./Photos.js"

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);


    function handleResponse(response) {
        setResults(response.data);
    }

    function handlePhotoResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        //documentation: https://www.shecodes.io/learn/apis/dictionary
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=21b0o158462fba6c2a0f6eca1t37c8ec`
        axios.get(apiUrl).then(handleResponse);

        let photoApiKey = "21b0o158462fba6c2a0f6eca1t37c8ec";
        let PhotoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
        axios.get(PhotoApiUrl).then(handlePhotoResponse);
    }


    function handleSubmit(event) {
        event.preventDefault();
        search();        
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }


    function load() {
        setLoaded(true);
        search();    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <form className="dictionary-form" onSubmit={handleSubmit}>
                <label for="word">Enter a word</label>
                    <input type="search"  placeholder="e.g., serendipity" onChange={handleKeywordChange}/>
                    <button type="submit">Search</button>    
                </form>
                <Results results={results} />
                <Photos photos={photos}/>
            </div>
        ) 
    } else {
        load();
        return "Loading..."
    }



   
}