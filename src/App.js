import {Header} from "./components/header/header";
import {SearchBox} from "./components/search-box/search-box";
import {UserInfo} from "./components/user-info/user-info";
import { GlobalStyles } from "./globalStyle.styles"
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
    headerTextColor: "#222731",
    body: "#F6F8FF",
    textSecondary: "#4B6A9B",
    section: "#FEFEFE",
    textPrimary: "#2B3442"
}

const darkTheme = {
    headerTextColor: "#FFF",
    body: "#141D2F",
    textSecondary: "#FFFFFF",
    section: "#1E2A47",
    textPrimary: "#FFFFFF"
}

function App() {

    const [data, setData] = useState({ });
    const [query, setQuery] = useState("");
    const [getTheme, setTheme] = useState("light")
  return (
      <ThemeProvider theme={getTheme === 'light' ? lightTheme : darkTheme}>
          <>
              <GlobalStyles/>
              <Header getTheme={getTheme} setTheme={setTheme} />
              <SearchBox query={query} setQuery={setQuery} data={data} setData={setData} isVisible={ Object.keys(data).length ? "none" : "inline-block" } />
              <UserInfo data={data} isVisible={ Object.keys(data).length  ? "flex" : "none" } />
          </>
      </ThemeProvider>
  );
}

export default App;
