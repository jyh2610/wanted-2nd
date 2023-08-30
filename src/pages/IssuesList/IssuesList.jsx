import { useState, useEffect, useRef } from 'react';

import { styled } from 'styled-components';

import { IssueListApi } from './callData';
import Issues from './components/Issues';

function IssuesList() {
  const [issues, setIssues] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(); // Intersection Observer의 ref
  const lastIssueRef = useRef(); // 마지막 이슈 엘리먼트의 ref

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        setLoading(true);
        const data = await IssueListApi(pageNumber);
        const OpenedData = data.filter(issue => issue.state === 'open');
        setIssues(prevIssues => [...prevIssues, ...OpenedData]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIssues();
  }, [pageNumber]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0.5,
    };

    const handleObserver = entries => {
      const entry = entries[0];
      if (entry.isIntersecting && !loading) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, options);

    if (observerRef.current && lastIssueRef.current) {
      observerRef.current.observe(lastIssueRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading]);

  return (
    <RootLayout>
      {issues.map((issue, idx) => {
        const isFifth = (idx + 1) % 5 === 0;

        return (
          <div key={issue.id} ref={idx === issues.length - 1 ? lastIssueRef : null}>
            {idx === issues.length - 1 ? (
              <Issues issue={issue} />
            ) : (
              <>
                {isFifth && (
                  <AdCells>
                    <img
                      src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
                      alt='wanted banner'
                    />
                  </AdCells>
                )}
                <Issues issue={issue} />
              </>
            )}
          </div>
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
  height: 100px;
  border-bottom: 1px solid gray;
  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
`;
