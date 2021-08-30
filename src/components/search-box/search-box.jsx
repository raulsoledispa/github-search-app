import React, {useEffect, useState} from "react";
import './search-box.css';
import {Octokit} from "@octokit/core";

export const SearchBox = ({ query, setQuery, setData}) => {
    async function fetchData() {
        const octokit = new Octokit({ auth: `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` });
        try {
            const response = await octokit.request("GET /users/{username}", {
                username: query
            });
            console.log(response.data);

            setData(response.data);
        }catch (e){
            console.error(e.message);
        }
    }

    const handleChange = (value) => {
        setQuery(value);
    }


  return(
      <div className="search">
          <input className="search__input"
                 value={query}
                 onChange={e => handleChange(e.target.value)}
                 id="inp-value"
                 type="search"
                 placeholder="Search GitHub username..."/>
          <button onClick={fetchData} className="search__button">Search</button>
      </div>
  )
}
