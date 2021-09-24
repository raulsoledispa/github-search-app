import  { Input, SearchButton, Wrapper, AlertResult} from "./search-box.styles.jsx"
import {Octokit} from "@octokit/core";
import { FaSearch } from "react-icons/fa";

import process from "process";
export const SearchBox = ({ query, setQuery, setData}) => {

    const isVisible = (data) => Object.keys(data).length ? "none" : "inline-block";


    async function fetchData() {
        const octokit = new Octokit({ auth: process.env.TOKEN });
        try {
            const response = await octokit.request("GET /users/{username}", {
                username: query
            });
            console.log(response.data);

            setData(response.data);
        }catch (e){
            setData({});
            console.error(e.message);
        }
    }

    const handleChange = (value) => {
        setQuery(value);
    }


  return(
      <Wrapper>
          <span><FaSearch size="19px"  color="#0079FF" /></span>
          <Input
                 value={query}
                 onChange={e => handleChange(e.target.value)}
                 id="inp-value"
                 type="search"
                 autoComplete="on"
                 placeholder="Search GitHub username..."/>
          <AlertResult isVisible={isVisible}><p>Not result</p></AlertResult>
          <SearchButton onClick={fetchData} >Search</SearchButton>
      </Wrapper>
  )
}
