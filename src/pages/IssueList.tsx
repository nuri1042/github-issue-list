import { useCallback, useEffect, useLayoutEffect } from "react";
import Advertisement from "../components/Advertisement";
import IssueListInfo from "../components/IssueListInfo";
import LoadSpin from "../components/LoadSpin";
import useIssue from "../hooks/useIssue";
import styled from "styled-components";

function IssueList() {
  const { issueList, fetchIssues, fetchMoreIssues, status } = useIssue();

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (Math.floor(scrollTop + clientHeight) >= scrollHeight) {
        fetchMoreIssues();
      }
    });

    console.log("scroll");
  };

  useEffect(() => {
    fetchIssues();
    handleScroll();
  }, []);

  return (
    <IssueContainer className="IssueListcontainer">
      {issueList.map((issue, index) => (
        <div key={issue.id}>
          {(index + 1) % 5 !== 0 ? (
            <IssueListInfo key={issue.id} issue={issue} />
          ) : (
            <Advertisement />
          )}
        </div>
      ))}
      {status === "loading" && <LoadSpin />}
    </IssueContainer>
  );
}
export default IssueList;

const IssueContainer = styled.div`
  overflow: auto;
  height: calc(100%-50px);
`;
