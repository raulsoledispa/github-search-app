import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  margin-top: 31px;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: ${ ({ theme }) => theme.headerTextColor};
  font-size: 2.6rem;
  line-height: 39px;
  font-style: normal;
  font-weight: bold;
`

export const ToggleContainer = styled.button`
  background-color: transparent;
  color: ${ ({ theme }) => theme.textSecondary};
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.3rem;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  font-weight: bold;

  svg {
    height: 20px;
    width: 20px;
    transition: all 0.3s linear;
    color: ${ ({theme}) => theme.textSecondary};
    // sun icon
    &:nth-child(1) {
      transform: ${ props => props.getTheme === "light" ? 'translate(10px, 0px)' : 'translateY(-100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${ props => props.getTheme === "light" ? 'translateY(-100px)' : 'translate(-10px, 0)'};
    }
  }
`;
