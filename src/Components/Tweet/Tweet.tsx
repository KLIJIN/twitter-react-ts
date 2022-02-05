import React from "react";
import PostButton from "../../Components/PostButton";

import Comment from "../../Assets/comment.svg";
import Retweet from "../../Assets/retweet.svg";
import Like from "../../Assets/like.svg";
import Share from "../../Assets/share.svg";

import "./Tweet.scss";

interface TweetProps {
  // children: React.ReactNode;
  avatarURL?: string;
  text?: string;
  user?: {
    fullname: string;
    username: string;
  };
}

const Tweet: React.FC<TweetProps> = ({ avatarURL, user, text }) => {
  return (
    <>
      <div className="tweet_container">
        <div className="tweet_avatar">
          <img src={avatarURL} alt="tweet_avatar" className="tweet_avatar" />
        </div>
        <div className="tweet_content">
          <b>{user?.fullname}</b> <span>{user?.username}</span>
          <p>{text}</p>
          <div className="tweet_buttons_container">
            <PostButton>
              <>
                <img src={Comment} alt="Comment" />
                <span className="post_button_text">6</span>
              </>
            </PostButton>
            <PostButton>
              <>
                <img src={Retweet} alt="Retweet" />
                <span className="post_button_text">82</span>
              </>
            </PostButton>
            <PostButton>
              <>
                <img src={Like} alt="Like" />
                <span className="post_button_text">595</span>
              </>
            </PostButton>
            <PostButton>
              <>
                <img src={Share} alt="home" />
              </>
            </PostButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
