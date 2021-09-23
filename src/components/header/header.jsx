import React from "react";
import { Wrapper, Title } from "./header.styles"

export const Header = ({theme, setTheme}) => {
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  return (
      <Wrapper>
          <Title>devfinder</Title>
          <button onClick={changeTheme}>Click</button>
      </Wrapper>
  )
}
