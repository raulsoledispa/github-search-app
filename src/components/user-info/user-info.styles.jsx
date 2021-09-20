import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 16px;
  display: ${ props => props.isVisible ?? "none" };
  flex-direction: column;
  background-color: #1E2A47;
  border-radius: 15px;
  height: auto;
  padding: 0 24px 30px;
`;

export const TitleContainer = styled.div`
  display: inherit;
  justify-content: start;
  align-items: center;
  height: 75px;
`;


export const FullName = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
`;

export const UserName = styled.p`
  color: #0079FF;
  font-style: normal;
`;

export const Joined = styled.p`
  margin-top: 6px;
  color: white;
  font-size: 1.1rem;
`;
