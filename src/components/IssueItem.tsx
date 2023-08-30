import { ReactNode } from "react";
import { styled } from "styled-components";
import { IssueSchema } from "../types/issueApi";

interface Props {
  issue: IssueSchema;
  children: ReactNode;
}

function IssueItem({ issue, children }: Props) {
  return (
    <>
      <DetailTopContainer>
        <div>
          <IssueTitle>{issue.title}</IssueTitle>
          <IssueNumber>{`#${issue.number}`}</IssueNumber>
        </div>
        <AvatarBlock>
          <GithubAvatar src={issue.user.avatar_url} alt="githubAvatar" />
          <IssueDescription>{`${issue.user.login} opened this issue on ${issue.created_at} · ${issue.comments} comments`}</IssueDescription>
        </AvatarBlock>
      </DetailTopContainer>
      <MarkdownContainer>
        {children !== "" && <p>{children}</p>}
      </MarkdownContainer>
    </>
  );
}

const DetailTopContainer = styled.div`
  margin-top: 20px;
  border-bottom: 0.5px solid grey;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const IssueTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
`;

const IssueNumber = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: grey;
  margin-left: 5px;
`;

const IssueDescription = styled.span`
  margin-top: 5px;
  color: grey;
  font-size: 12px;
  line-height: 1.5;
`;

const AvatarBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const GithubAvatar = styled.img`
  margin-right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const MarkdownContainer = styled.div`
  margin-top: 30px;
  padding: 30px;
  border: 0.5px solid grey;
  border-radius: 4px;
`;

export default IssueItem;
