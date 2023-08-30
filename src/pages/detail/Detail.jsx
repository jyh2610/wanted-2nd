import { useLocation } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const { number, title, formatedDate, login, comments, avatar_url, body } = location.state;

  return (
    <div>
      <div>
        <img src={avatar_url} alt='img' />
        <div>
          <span>#{number}</span>
          <span>{title}</span>
        </div>
        <div>
          <span>{formatedDate}</span>
          <span>{login}</span>
        </div>
        <div>{comments}</div>
        <div>{body}</div>
      </div>
    </div>
  );
}

export default Detail;
