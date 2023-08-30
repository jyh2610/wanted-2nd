import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const { number, title, updated_at, login, comments, avatar_url, body } =
    location.state;
  console.log(login);
  return (
    <div>
      <div>
        <div>{avatar_url}</div>
        <div>
          <span>#{number}</span>
          <span>{title}</span>
        </div>
        <div>
          <span>{updated_at}</span>
          <span>{login}</span>
        </div>
        <div>{comments}</div>
        <div>{body}</div>
      </div>
    </div>
  );
}

export default Detail;
