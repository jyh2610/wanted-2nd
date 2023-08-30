import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { formatDate } from '../../../apis/formatData';

function Issues({ issue }) {
  const { number, title, updated_at, user, comments, avatar_url, body } = issue;
  const navigate = useNavigate();
  const formatedDate = formatDate(updated_at);
  const moveIssue = () => {
    const { login } = user;
    navigate(`detail/${issue.id}`, {
      state: {
        number,
        title,
        formatedDate,
        login,
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
        <br />
        <span>{title}</span>
        <div>
          <span>작성자 : {user.login}</span>
          <span>작성일 : {formatedDate}</span>
        </div>
      </div>
      <div>코멘트 : {comments}</div>
    </IssueDiv>
  );
}

export default Issues;

const IssueDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20%;
  padding: 10px;
  border-bottom: 1px solid gray;
`;
