import { issueListApi } from "../../api/api";
import { useState, useEffect } from "react";
import Issues from "./components/Issues";
import { styled } from "styled-components";

function IssuesList() {
  const [issues, setIssues] = useState([]);
  // const [error, setError] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const data = await issueListApi();
        const OpenedData = await data.filter((issue) => issue.state === "open");
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
      {issues.map((issue) => {
        return <Issues key={issue.id} issue={issue} />;
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
