import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIssueListApi } from "../api/issue";
import { pathParam } from "../constant/pathParam";
import { IssueSchema } from "../types/issueApi";
import { store } from "./store";

interface initialType {
  issueList: IssueSchema[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}
const initialState: initialType = {
  issueList: [],
  status: "idle",
  error: undefined,
};

export const getIssues = createAsyncThunk(
  "issueListSlice/getIssues",
  async () => {
    const response = await getIssueListApi(pathParam.owner, pathParam.repo);
    return response;
  }
);

export const getMoreIssues = createAsyncThunk(
  "issueListSlice/getMoreIssues",
  async (page: number) => {
    const response = await getIssueListApi(
      pathParam.owner,
      pathParam.repo,
      page
    );
    return response;
  }
);

// slice 생성
export const issueListSlice = createSlice({
  // slice 이름
  name: "issueListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIssues.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.issueList = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getIssues.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getMoreIssues.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getMoreIssues.fulfilled, (state, action) => {
      state.issueList = state.issueList.concat(action.payload);
      state.status = "succeeded";
    });
    builder.addCase(getMoreIssues.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default issueListSlice.reducer;
