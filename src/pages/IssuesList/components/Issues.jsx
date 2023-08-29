import React from "react";

function Issues({ issue }) {
  return (
    <div>
      <div>
        <span>{issue.number}</span>
        <span>{issue.title}</span>
      </div>
      <div>
        <span>{issue.updated_at}</span>
        <span>{issue.user.login}</span>
      </div>
      <div>{issue.comments}</div>
    </div>
  );
}

export default Issues;
