import { useState, useEffect } from 'react';

import { issueListApi } from 'api/api';
import { styled } from 'styled-components';

import Issues from './components/Issues';

function IssuesList() {
  const [issues, setIssues] = useState([]);
  // const [error, setError] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const data = await issueListApi();
        const OpenedData = await data.filter(issue => issue.state === 'open');
        setIssues(OpenedData);
      } catch (error) {
        // setError("Error fetching issues");
        console.error(error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <RootLayout>
      {issues.map((issue, idx) => {
        const isFifth = idx && (idx + 1) % 5 === 0;
        return isFifth ? (
          <AdCells>
            <img
              src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
              alt='wanted banner'
            />
          </AdCells>
        ) : (
          <Issues key={issue.id} issue={issue} />
        );
      })}
    </RootLayout>
  );
}

export default IssuesList;

const RootLayout = styled.div`
  height: 90%;
  padding: 0 10px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AdCells = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  border-bottom: 1px solid gray;
  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
`;
