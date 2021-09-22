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

  @media( min-width: 768px){
    height: 117px;
    width: 117px;
  }
  
`;


export const FullName = styled.p`
  font-size: 1.6rem;
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


export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #141D2F;
  padding: 18px 15px;
  border-radius: 10px;
  margin-top: 20px;
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
    color: white;
    margin-left: 10px;
  }
  
  @media( min-width: 768px){
    display: grid;
    grid-template-columns: auto auto;
  }
`;
