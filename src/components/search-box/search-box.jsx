import './search-box.css';
import {Octokit} from "@octokit/core";
import { FaSearch } from "react-icons/fa";

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
            setData({});
            console.error(e.message);
        }
    }

    const handleChange = (value) => {
        setQuery(value);
    }


  return(
      <div className="search">
          <span><FaSearch size="19px"  color="#0079FF" /></span>
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
