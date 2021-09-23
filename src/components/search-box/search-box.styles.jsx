import styled from "styled-components";


export const Wrapper = styled.div`
  background-color: ${ ({ theme }) => theme.section};
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  margin-top: 36px;
  padding: 7px;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  background: ${ ({ theme }) => theme.section};
  font-size: 1.3rem;
  line-height: 25px;
  font-style: normal;
  font-weight: normal;
  color: ${ ({ theme }) => theme.textSecondary};
  border: none;
  margin-left: 5px;
  
  :focus{
    outline: none;
  }

  @media( min-width: 768px){
    font-size: 1.8rem;
    margin-left: 15px;
  }
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

