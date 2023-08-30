import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Issues({ issue }) {
  const { number, title, updated_at, user, comments, avatar_url, body } = issue;
  const navigate = useNavigate();
  const moveIssue = () => {
    const { login } = user;
    navigate(`detail/${issue.id}`, {
      state: {
        number,
        title,
        updated_at,
        login,
        comments,
        avatar_url,
        body,
      },
    });
  };
  console.log(issue.user);
  return (
    <IssueDiv onClick={moveIssue}>
      <div>
        <span>#{number}</span>
        <span>{title}</span>
      </div>
      <div>
        <span>{updated_at}</span>
        <span>{user.login}</span>
      </div>
      <div>{comments}</div>
    </IssueDiv>
  );
}

export default Issues;

const IssueDiv = styled.div`
  border-bottom: 1px solid gray;
`;
