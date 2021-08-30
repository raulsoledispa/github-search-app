import React from "react";
import "./user-info.css";

export const UserInfo = ({ data }) => {
  return (
      <div className="user-info--container">

        <div className="user-info--title">
          <img src={data.avatar_url} alt="Avatar" />
          <div className="user-info--principal">
            <p className="user-info--name">{data.name}</p>
            <p className="user-info--username">@octacat</p>
            <p className="user-info--joined">Joined {data.created_at}</p>
          </div>
        </div>

        <div>
          Bla bla bla bla
        </div>

        <div>
          <div>
            <p>Repos</p>
            <p>8</p>
          </div>
          <div>
            <p>Followers</p>
            <p>1</p>
          </div>
          <div>
            <p>Following</p>
            <p>9</p>
          </div>
        </div>

        <div>
          <div>
            <span><img src="" alt="Location" /></span> <p>San Franscisco</p>
          </div>
          <div>
            <span><img src="" alt="WebSite" /></span> <p>https://website.com</p>
          </div>
          <div>
            <span><img src="" alt="Twitter" /></span> <p>Not Avaliable</p>
          </div>
          <div>
            <span><img src="" alt="Organization" /></span> <p>@github</p>
          </div>
        </div>

      </div>
  )
}
