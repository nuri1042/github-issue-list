import { useCallback, useRef } from "react";
import { useAppDispatch, useAppSelector } from "./useTypedSelector";
import { getIssues, getMoreIssues } from "../redux/issueSlice";

const useIssue = () => {
  const { issueList, status } = useAppSelector((state) => state.issueList);

  const dispatch = useAppDispatch();
  const ref = useRef(1);

  const fetchIssues = useCallback(() => {
    dispatch(getIssues());
  }, [dispatch]);

  const fetchMoreIssues = () => {
    if (status !== "loading") {
      ref.current += 1;
      dispatch(getMoreIssues(ref.current));
    }
  };
  const loading = status === "loading";
  return { issueList, fetchIssues, fetchMoreIssues, status };
};
export default useIssue;
