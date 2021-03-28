  
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { User, Repository, Issue} from "../types";

interface SearchState {
  searchType: string,
  searchText: string,
  users: User[];
  repositories: Repository[];
  issues: Issue[];
  isLoading: boolean,
}

const initialState: SearchState = {
  searchType: 'users',
  searchText: '',
  users: [],
  repositories: [],
  issues: [],
  isLoading: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchType: (state, action: PayloadAction<string>) => {
      state.searchType = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setRepositories: (state, action: PayloadAction<Repository[]>) => {
      state.repositories = action.payload;
    },
    setIssues: (state, action: PayloadAction<Issue[]>) => {
      state.issues = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchType, setSearchText,setUsers,setRepositories, setIssues, setIsLoading } = searchSlice.actions;

export const selectSearchType = (state: RootState) => state.search.searchType;
export const selectSearchText = (state: RootState) => state.search.searchText;
export const selectUsers = (state: RootState) => state.search.users;
export const selectRepositories = (state: RootState) => state.search.repositories;
export const selectIssues = (state: RootState) => state.search.issues;
export const selectIsLoading = (state: RootState) => state.search.isLoading;



export const setSearchResultsAsync = (searchType: string, searchText: string): AppThunk => dispatch => {
  dispatch(setIsLoading(true))
  fetch(`http://localhost:5000/api/search?searchType=${searchType}&searchText=${searchText}`, {
    method: 'POST',
  }).then(response => response.json())
    .then((data) => {
      switch (searchType) {
        case "users": 
          dispatch(setUsers(data.items));
          break;
        case "repositories": 
          dispatch(setRepositories(data.items));
          break;
        case "issues": 
          dispatch(setIssues(data.items));
          break;
      }
      dispatch(setIsLoading(false))
    }).catch((error) => {
      dispatch(setIsLoading(false))
      console.log("err: ",error);
    });
};

export default searchSlice.reducer;