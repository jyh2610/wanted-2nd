import { useState, useEffect, useRef } from 'react';

import { styled } from 'styled-components';

import Issues from './Issues';
import { IssueListApi } from '../../../apis/callData';
import { Link } from 'react-router-dom';

function List() {
  const [issues, setIssues] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef();
  const lastIssueRef = useRef();

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

  return issues.map((issue, idx) => {
    const isFifth = (idx + 1) % 5 === 0;

    return (
      <div key={issue.id} ref={idx === issues.length - 1 ? lastIssueRef : null}>
        {idx === issues.length - 1 ? (
          <Issues issue={issue} />
        ) : (
          <>
            {isFifth && (
              <Link href='https://www.wanted.co.kr/'>
                <AdCells>
                  <img
                    src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
                    alt='wanted banner'
                  />
                </AdCells>
              </Link>
            )}
            <Issues issue={issue} />
          </>
        )}
      </div>
    );
  });
}

export default List;

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
