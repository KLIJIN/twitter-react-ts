import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Input } from "@mui/material";
// icons
import HomeIcon from "../../Assets/home.svg";
import Search from "../../Assets/search.svg";
import Notifications from "../../Assets/notifications.svg";
import Messages from "../../Assets/messages.svg";
import Bookmarks from "../../Assets/bookmarks.svg";
import Lists from "../../Assets/lists.svg";
import Profile from "../../Assets/profile.svg";

import "./SideMenu.scss";

const SideMenu: React.FC = () => {
  return (
    <>
      <ul className="sidemenu_container">
        <li>
          <button aria-label="" color="primary" className="sidemenu_button">
            <TwitterIcon color="primary" />
          </button>
        </li>
        <li>
          <button aria-label="" color="primary" className="sidemenu_button">
            <img src={HomeIcon} alt="home" className="home_icon" />
            <span className="sidemenu_button-tweet_text">Home</span>
          </button>
        </li>
        <li>
          <button aria-label="" color="primary" className="sidemenu_button">
            <img src={Search} alt="home" className="home_icon" />
            <span className="sidemenu_button-tweet_text">Explore</span>
          </button>
        </li>
        <li>
          <button aria-label="" color="primary" className="sidemenu_button">
            <img src={Notifications} alt="home" className="home_icon" />
            <span className="sidemenu_button-tweet_text">Notifications</span>
          </button>
        </li>
        <li>
          <button aria-label="" color="primary" className="sidemenu_button">
            <img src={Messages} alt="home" className="home_icon" />
            <span className="sidemenu_button-tweet_text">Messages</span>
          </button>
        </li>
        <li>
          <button aria-label="" color="primary" className="sidemenu_button">
            <img src={Bookmarks} alt="home" className="home_icon" />
            <span className="sidemenu_button-tweet_text">Bookmarks</span>
          </button>
        </li>
        <li>
          <button aria-label="" color="primary" className="sidemenu_button">
            <img src={Lists} alt="home" className="home_icon" />
            <span className="sidemenu_button-tweet_text">Lists</span>
          </button>
        </li>
        <li>
          <button aria-label="" color="primary" className="sidemenu_button">
            <img src={Profile} alt="home" className="home_icon" />
            <span className="sidemenu_button-tweet_text">Profile</span>
          </button>
        </li>
        <li>
          <button
            aria-label=""
            color="primary"
            className="sidemenu_button-tweet"
          >
            <span className="sidemenu_button-text">Tweet</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default SideMenu;
