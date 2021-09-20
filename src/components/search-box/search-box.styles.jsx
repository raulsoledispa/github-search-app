import styled from "styled-components";


export const Wrapper = styled.div`
  background-color: #1E2A47;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  margin-top: 36px;
  padding: 7px;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  background: #1E2A47;
  font-size: 1.2rem;
  line-height: 25px;
  font-style: normal;
  font-weight: normal;
  font-family: "Space Mono", sans-serif;
  color: white;
  border: none;
  margin-left: 5px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  border-radius: 10px;
  background-color: #0079FF;
  padding: 12px 16px;
  font-weight: bold;
  font-size: 1.4rem;
  color: white;
  border: none;
`;


export const AlertResult = styled.span`
  display: ${ props => props.isVisible ?? "none"};
  color: red;
  font-weight: bold;
  margin-right: 2px;
`;

