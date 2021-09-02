import './App.css';
import {Header} from "./components/header/header";
import {SearchBox} from "./components/search-box/search-box";
import {UserInfo} from "./components/user-info/user-info";
import React, { useState } from "react";



function App() {

    const [data, setData] = useState({ });
    const [query, setQuery] = useState('');

  return (
    <div className="App">
      <Header />
      <SearchBox query={query} setQuery={setQuery} data={data} setData={setData} />
      <UserInfo data={data} isVisible={ Object.keys(data).length ? "flex" : "none"} />
    </div>
  );
}

export default App;
