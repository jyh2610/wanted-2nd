import React from "react";
import { styled } from "styled-components";

function Issues({ issue }) {
  return (
    <IssueDiv>
      <div>
        <span>#{issue.number}</span>
        <span>{issue.title}</span>
      </div>
      <div>
        <span>{issue.updated_at}</span>
        <span>{issue.user.login}</span>
      </div>
      <div>{issue.comments}</div>
    </IssueDiv>
  );
}

export default Issues;

const IssueDiv = styled.div`
  border-bottom: 1px solid gray;
`;
