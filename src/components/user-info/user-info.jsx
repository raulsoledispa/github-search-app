import React from "react";
import "./user-info.css";
import { GoLocation, GoLink } from "react-icons/go";
import { FaBuilding, FaTwitter } from "react-icons/fa";


export const UserInfo = ({ data, isVisible }) => {
    console.log(isVisible)
  return (
      <div style={ {display: isVisible}} className="user-info--container">

        <div className="user-info--title">
          <img src={data.avatar_url} alt="Avatar" />
          <div className="user-info--principal">
            <p className="user-info--name">{data.name}</p>
            <p className="user-info--username">{data.username}</p>
            <p className="user-info--joined">Joined {data.created_at}</p>
          </div>
        </div>

        <div className="user-info__bio">
          Bla bla bla bla
        </div>

        <div className="user-info--statics">
          <div className="user-info--repos">
            <p className="user-info--statics__title">Repos</p>
            <p className="user-info--statics__number">{data.total_private_repos}</p>
          </div>
          <div className="user-info--followers">
            <p className="user-info--statics__title">Followers</p>
            <p className="user-info--statics__number">{data.followers}</p>
          </div>
          <div className="user-info--following">
            <p className="user-info--statics__title">Following</p>
            <p className="user-info--statics__number">{data.following}</p>
          </div>
        </div>

        <div className="user-info__social-network">
          <div className="social-network__container">
            <span><GoLocation size="15px" color="white" /></span> <p className="social-network__title">{ data.location }</p>
          </div>
          <div className="social-network__container">
              <span><GoLink size="15px" color="white" /></span> <p className="social-network__title">{ data.html_url || "Not Available"}</p>
          </div>
          <div className="social-network__container">
              <span><FaTwitter size="15px" color="white" /></span> <p className="social-network__title">{ data.twitter_username || "Not Available"}</p>
          </div>
          <div className="social-network__container">
              <span><FaBuilding size="15px" color="white" /></span> <p className="social-network__title">@github</p>
          </div>
        </div>

      </div>
  )
}
