import { Octokit } from "octokit";
import { useState, useEffect } from "react";
import React from "react";

function IssuesList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const token = process.env.REACT_APP_TOKEN;
    const octokit = new Octokit({ auth: token });
    async function fetchIssues() {
      fetch(
        "https://api.github.com/repos/facebook/react/issues?sort=comments",
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      )
        .then((response) => response.json())
        .then((issues) => {
          // HTML에 추가하는 내용
          console.log(issues);
        });
      // try {
      //   const response = await octokit.request(
      //     "GET https://github.com/facebook/react/issues",
      //     {
      //       owner: "facebook",
      //       repo: "react", // 리포지토리 이름
      //     }
      //   );

      //   setIssues(response.data);
      // } catch (error) {
      //   console.error("Error fetching issues:", error);
      // }
    }

    fetchIssues();
  }, []);
  console.log(issues);
  return <div>1</div>;
}

export default IssuesList;
