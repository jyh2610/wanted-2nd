import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

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

  return (
    <IssueDiv onClick={moveIssue}>
      <div>
        <span>#{number}</span>
        <span>{title}</span>{' '}
        <div>
          <span>작성자 : {user.login}</span>
          <span>작성일 : {updated_at}</span>
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
