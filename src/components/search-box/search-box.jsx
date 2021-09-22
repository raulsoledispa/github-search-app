import  { Input, SearchButton, Wrapper, AlertResult} from "./search-box.styles.jsx"
import {Octokit} from "@octokit/core";
import { FaSearch } from "react-icons/fa";

export const SearchBox = ({ query, setQuery, setData}) => {

    const isVisible = (data) => Object.keys(data).length ? "none" : "inline-block";


    async function fetchData() {
        const octokit = new Octokit({ auth: `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` });
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
                 placeholder="Search GitHub username..."/>
          <AlertResult isVisible={isVisible}><p>Not result</p></AlertResult>
          <SearchButton onClick={fetchData} >Search</SearchButton>
      </Wrapper>
  )
}
