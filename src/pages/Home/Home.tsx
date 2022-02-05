import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Tweet from "../../Components/Tweet";
import SideMenu from "../../Components/SideMenu/";
import Star from "../../Assets/star.svg";
import Cat from "../../Assets/avaCat.png";

import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div>
      <div className="container">
        <SideMenu />
        <div style={{ backgroundColor: "lime" }}>
          <div className="home_header">
            <span>Home</span>
            <img src={Star} alt="star" className="home_header_icon" />
          </div>
          <Tweet
            avatarURL={Cat}
            user={{ fullname: "Литература", username: "@literabook" }}
            text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.`}
          />
        </div>

        <div>
          <div className="search_container">
            <SearchIcon className="search_icon" />
            <input
              type="text"
              placeholder="Поиск в твиттере"
              className="search_input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
