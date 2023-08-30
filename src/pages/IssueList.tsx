import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Advertisement from "../components/Advertisement";
import infiniteScroll from "../components/infiniteScroll";
import IssueListInfo from "../components/IssueListInfo";
import LoadSpin from "../components/LoadSpin";
import useIssue from "../hooks/useIssue";

function IssueList() {
  const { issueList, fetchIssues, fetchMoreIssues, status } = useIssue();

  useEffect(() => {
    fetchIssues();
  }, []);
  const handleScroll = infiniteScroll(fetchMoreIssues);
  return (
    <>
      <div className="IssueListcontainer" onScroll={handleScroll}>
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
      </div>
    </>
  );
}
export default IssueList;
