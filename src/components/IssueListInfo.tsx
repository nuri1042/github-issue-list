import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IssueSchema } from "../types/issueApi";

type IssueBlockProps = {
  issue: IssueSchema;
};

function IssueListInfo({ issue }: IssueBlockProps) {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`issue/${issue.number}`);
  };

  return (
    <IssueContainer>
      <StatusIcon>
        <svg
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
          fill="green"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
        </svg>
      </StatusIcon>
      <RightBlock>
        <IssueDescriptionBlock>
          <IssueTitle onClick={navigateToDetail}>{issue.title}</IssueTitle>
          <IssueDescription>{`#${issue.number} 작성자: ${issue.user.login} 작성일: ${issue.created_at} `}</IssueDescription>
        </IssueDescriptionBlock>
        <CommentBlock onClick={navigateToDetail}>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            fill="grey"
          >
            <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
          </svg>
          <CommentCount>{issue.comments}</CommentCount>
        </CommentBlock>
      </RightBlock>
    </IssueContainer>
  );
}

const IssueContainer = styled.div`
  display: flex;
  border-bottom: 0.5px solid grey;
  padding: 10px 0;
`;

const StatusIcon = styled.div`
  width: 35px;
`;

const IssueDescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const IssueTitle = styled.p`
  cursor: pointer;
  margin-top: -5px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 700;
  &:hover {
    color: blue;
  }
`;

const IssueDescription = styled.span`
  margin-top: 5px;
  color: grey;
  font-size: 12px;
`;

const RightBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CommentCount = styled.span`
  margin-left: 5px;
  font-size: 12px;
  color: grey;
`;

export default IssueListInfo;
