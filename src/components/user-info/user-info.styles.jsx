import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 16px;
  display: ${ props => props.isVisible ?? "block" };
  flex-direction: column;
  background-color: ${ ({ theme }) => theme.section};
  border-radius: 15px;
  height: auto;
  padding: 0 24px 30px;
  color: ${ ({ theme }) => theme.textSecondary};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 75px;
  margin-top: 30px;
  
  
  div {
    margin-left: 20px;
  }
`;

export const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;

  @media( min-width: 768px){
    height: 117px;
    width: 117px;
  }
  
`;


export const FullName = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;

  @media( min-width: 768px){
    font-size: 2.6rem;
  }
`;

export const UserName = styled.p`
  color: #0079FF;
  font-style: normal;
`;

export const Joined = styled.p`
  margin-top: 6px;
  font-size: 1.1rem;
`;


export const Resume = styled.p`
  margin-top: 30px;
`;


export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${ ({ theme }) => theme.body};
  padding: 18px 15px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  div p:nth-child(1) {
    font-size: 1.1rem;
    font-style: normal;
    color: ${ ({theme}) => theme.textSecondary};
    line-height: 16px;
  }

  div p:nth-child(2) {
    color: ${ ({theme}) => theme.textSecondary};
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
  }
  
  /*
  div{
    display: flex;
    margin-bottom: 5px;
  }
  
  
  p{
    font-weight: normal;
    line-height: 19px;
    color: white;
    margin-left: 10px;
  }
  
  @media( min-width: 768px){
    display: grid;
    grid-template-columns: auto auto;
  }*/
`;


export const SocialNetworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 20px;
  flex-wrap: wrap;
  
  div{
    display: flex;
    margin-bottom: 5px;
  }
  
  p{
    font-weight: normal;
    line-height: 19px;
    color: ${ ({ theme }) => theme.textSecondary};
    margin-left: 10px;
  }
  
  svg{
    color: ${ ({ theme }) => theme.textSecondary};
    size: 15px;
  }
  
  @media( min-width: 768px){
    display: grid;
    grid-template-columns: auto auto;
  }
`;
