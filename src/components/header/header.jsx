import React from "react";
import { Wrapper, Title, ToggleContainer } from "./header.styles"
import { FaMoon, FaRegSun } from "react-icons/fa";

export const Header = ({getTheme, setTheme}) => {
  const changeTheme = () => {
    const newTheme = getTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  console.log(getTheme)
  return (
      <Wrapper>
          <div>
              <Title>devfinder</Title>
          </div>
          <div>
              <ToggleContainer getTheme={getTheme} onClick={changeTheme}>
                  {getTheme === "light" ? "DARK" : "LIGHT"}
                  <FaMoon />
                  <FaRegSun/>
              </ToggleContainer>
          </div>
      </Wrapper>
  )
}
