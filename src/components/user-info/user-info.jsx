import React from "react";
//import "./user-info.css";
import { Wrapper, TitleContainer, FullName, UserName, Joined, SocialNetworkContainer, Avatar, StatisticsContainer, Resume } from "./user-info.styles"
import { GoLocation, GoLink } from "react-icons/go";
import { FaBuilding, FaTwitter } from "react-icons/fa";


export const UserInfo = ({ data, isVisible }) => {

    const format = (dateStr) => {
        if(!dateStr) return null;
        return new Intl.DateTimeFormat('en-US', { dateStyle: "medium"}).format(new Date(dateStr))
    }

  return (
      <Wrapper isVisible={isVisible}>

        <TitleContainer>
          <Avatar src={data.avatar_url} alt="Avatar" />
          <div>
            <FullName>{data.name}</FullName>
            <UserName>@{data.login}</UserName>
            <Joined>Joined {format(data.created_at)}</Joined>
          </div>
        </TitleContainer>

        <Resume>
            { data.bio }
        </Resume>

        <StatisticsContainer>
          <div>
            <p>Repos</p>
            <p>{data.public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{data.followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{data.following}</p>
          </div>
        </StatisticsContainer>

        <SocialNetworkContainer>
          <div>
            <span><GoLocation /></span> <p>{ data.location }</p>
          </div>
          <div>
              <span><GoLink/></span> <p>{ data.blog || "Not Available"}</p>
          </div>
          <div>
              <span><FaTwitter /></span> <p>{ data.twitter_username || "Not Available"}</p>
          </div>
          <div>
              <span><FaBuilding /></span> <p>{ data.company || "@github"}</p>
          </div>
        </SocialNetworkContainer>

      </Wrapper>
  )
}
