import {Header} from "./components/header/header";
import {SearchBox} from "./components/search-box/search-box";
import {UserInfo} from "./components/user-info/user-info";
import { GlobalStyles } from "./globalStyle.styles"
import React, { useState } from "react";



function App() {

    const [data, setData] = useState({ });
    const [query, setQuery] = useState('');
  return (
      <>
          <GlobalStyles/>
          <Header />
          <SearchBox query={query} setQuery={setQuery} data={data} setData={setData} isVisible={ Object.keys(data).length ? "none" : "inline-block" } />
          <UserInfo data={data} isVisible={ Object.keys(data).length  ? "flex" : "none" } />
      </>
  );
}

export default App;
