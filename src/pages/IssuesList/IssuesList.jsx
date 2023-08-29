import { issueListApi } from "../../api/api";
import { useState, useEffect } from "react";
import Issues from "./components/Issues";

function IssuesList() {
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const data = await issueListApi();
        setIssues(data);
      } catch (error) {
        setError("Error fetching issues");
        console.error(error);
      }
    };

    fetchIssues();
  }, []);
  console.log(issues);
  return (
    <div>
      {issues.map((issue) => {
        return <Issues key={issue.id} issue={issue} />;
      })}
    </div>
  );
}

export default IssuesList;
