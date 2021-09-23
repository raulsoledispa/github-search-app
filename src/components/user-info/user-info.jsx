import React from "react";
//import "./user-info.css";
import { Wrapper, TitleContainer, FullName, UserName, Joined, SocialNetworkContainer, Avatar, StatisticsContainer, Resume } from "./user-info.styles"
import { GoLocation, GoLink } from "react-icons/go";
import { FaBuilding, FaTwitter } from "react-icons/fa";


export const UserInfo = ({ data, isVisible }) => {
  return (
      <Wrapper isVisible={isVisible}>

        <TitleContainer>
          <Avatar src={data.avatar_url} alt="Avatar" />
          <div>
            <FullName>{data.name}</FullName>
            <UserName>@{data.login}</UserName>
            <Joined>Joined {data.created_at}</Joined>
          </div>
        </TitleContainer>

        <Resume>
            { data.bio }
        </Resume>

        <StatisticsContainer>
          <div>
            <p className="user-info--statics__title">Repos</p>
            <p className="user-info--statics__number">{data.public_repos}</p>
          </div>
          <div>
            <p className="user-info--statics__title">Followers</p>
            <p className="user-info--statics__number">{data.followers}</p>
          </div>
          <div>
            <p className="user-info--statics__title">Following</p>
            <p className="user-info--statics__number">{data.following}</p>
          </div>
        </StatisticsContainer>

        <SocialNetworkContainer>
          <div>
            <span><GoLocation /></span> <p>{ data.location }</p>
          </div>
          <div>
              <span><GoLink/></span> <p>{ data.html_url || "Not Available"}</p>
          </div>
          <div>
              <span><FaTwitter /></span> <p>{ data.twitter_username || "Not Available"}</p>
          </div>
          <div>
              <span><FaBuilding /></span> <p>@github</p>
          </div>
        </SocialNetworkContainer>

      </Wrapper>
  )
}
