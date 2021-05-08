import axios from "axios";
import { useState } from "react";

import "./search.styles.scss";

import searchIcon from "../../assets/images/search-icon.svg";
import Item from "../item/item.component";

const API_KEY = process.env.REACT_APP_API_KEY;

function Search() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [hasResults, setHasResults] = useState(true);

    function handleOnChange(event) {
        setQuery(event.target.value);
    }

    async function onSubmit(event) {
        event.preventDefault();
        if (movies.length >= 1 && query.length < 1) {
            setMovies([]);
            return;
        }
        if (query.length < 1) return;
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${query}`);
            if (response.statusText !== "OK") {
                throw new Error("Failed to fetch movies.");
            }
            if (response.data?.Response === "False") {
                setHasResults(false);
                return;
            }
            setHasResults(true);
            setMovies(response.data.Search);
        } catch(error) {
            console.log(error.messsage);
        }
    }

    return(
        <div className="search-wrapper">
            <div className="heading"> movies </div>
            <form className="search-bar" onSubmit={onSubmit}>
                <input
                    src={searchIcon}
                    type="image"
                    className="icon"
                    value="Submit"
                    alt="Submit"
                />
                <input 
                    type="text"
                    className="search-input"
                    onChange={event => handleOnChange(event)}
                    placeholder="search movie"
                />
            </form>
            { !hasResults && 
                <div className="results-message"> No results found. </div> 
            } 
            <div className="items-wrapper">
                { movies.map(item => {
                    return <Item
                        key={item.imdbID} 
                        id={item.imdbID}
                        title={item.Title} 
                        poster={item.Poster} 
                        year={item.Year}
                    />
                })}
            </div>

        </div>
    )
}

export default Search;