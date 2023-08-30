import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Issues({ issue }) {
  console.log(issue);
  //이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문'
  const {
    number,
    title,
    updated_at,
    author_association,
    comments,
    avatar_url,
    body,
  } = issue;
  const navigate = useNavigate();
  const moveIssue = () => {
    navigate(`detail/${issue.id}`, {
      state: {
        number,
        title,
        updated_at,
        author_association,
        comments,
        avatar_url,
        body,
      },
    });
  };
  return (
    <IssueDiv onClick={moveIssue}>
      <div>
        <span>#{number}</span>
        <span>{title}</span>
      </div>
      <div>
        <span>{updated_at}</span>
        <span>{issue.user.login}</span>
      </div>
      <div>{comments}</div>
    </IssueDiv>
  );
}

export default Issues;

const IssueDiv = styled.div`
  border-bottom: 1px solid gray;
`;
