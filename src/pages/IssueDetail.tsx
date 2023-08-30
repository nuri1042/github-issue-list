import IssueItem from "../components/IssueItem";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/store";

export default function IssueDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { issueList } = useSelector((state: RootState) => state.issueList);
  let selectedIssue = issueList.find((issue) => issue.number === parseInt(id!));

  useEffect(() => {
    if (isNaN(Number(id))) {
      navigate("/error");
    }
  });

  return (
    <div>
      {selectedIssue && (
        <IssueItem issue={selectedIssue}>
          <ReactMarkdown>{selectedIssue.body || "no contents"}</ReactMarkdown>
        </IssueItem>
      )}
    </div>
  );
}
