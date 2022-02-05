import React from "react";
import "./PostButton.scss";

interface ButtonPostProps {
  children: React.ReactNode;
}

const PostButton: React.FC<ButtonPostProps> = ({ children }) => {
  return <div className="post_button_container">{children}</div>;
};

export default PostButton;
