import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
  setSearchResultsAsync, setSearchText, setSearchType, 
  selectSearchType, selectSearchText, selectRepositories, 
  selectUsers, selectIssues,selectIsLoading
} from '../redux/reducers/searchSlice';
import { Repository, User, Issue } from '../redux/types';
import SearchInput from '../components/SearchInput';
import RepositoryCard from '../components/RepositoryCard';
import UserCard from '../components/UserCard';
import IssueCard from '../components/IssueCard';
import { GridRow, GridColumn, SearchDiv } from '../components/style';
import GithubLogo from '../assets/images/github_logo2.png'

export function SearchView() {
  const dispatch = useDispatch();
  const searchType: string = useSelector(selectSearchType)
  const searchText: string = useSelector(selectSearchText)
  const isLoading: boolean = useSelector(selectIsLoading)
  const repositories: Repository[] = useSelector(selectRepositories)
  const users: User[] = useSelector(selectUsers)
  const issues: Issue[] = useSelector(selectIssues)


  const [currentText, setText] = useState("");
  const [currentType, setType] = useState(searchType);

  const [currentUsers, setCurrentUsers] = useState(users);
  const [currentRepositories, setCurrentRepositories] = useState(repositories);
  const [currentIssues, setCurrentIssues] = useState(issues);


  const handleSearchAPI = () => {
    dispatch(setSearchResultsAsync(currentType, currentText))
  }

  const isSearchEnabled = () => {
    if (currentText.length >= 3){
      return true
    } else {
      return false
    }
  }

  const searchGithub = () => {
    if (!isSearchEnabled()) {
      setCurrentRepositories([])
      setCurrentIssues([])
      setCurrentUsers([])
    }

    if (isSearchEnabled()) {
      if (currentText !== searchText || currentType !== searchType) {
        dispatch(setSearchText(currentText))
        dispatch(setSearchType(currentType))
        setText(currentText)
        handleSearchAPI()
      } else {
        console.warn("searchType", searchType)
        switch(searchType) {
          case "users": 
            setCurrentUsers(users)
            break;
          case "repositories": 
            setCurrentRepositories(repositories)
            break;
          case "issues":
            setCurrentIssues(issues)
            break;
        }
      }
    }
  }

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        searchGithub()
      }, 500)
  
      
      return () => clearTimeout(delayDebounceFn)
    }, [searchGithub])
 

  const onChangeSearchText = (event: any) => {
    setText(event.target.value)
    
  }

  const onChangeSearchType = (event: any) => {
    setType(event.target.value)
  }


  const renderCards = () => {
    // check if text search is lesser than 3 then display empty screen
    if (!isSearchEnabled()) {
      return null
    }

    // check if all results is empty then display empty screen
    if (currentUsers.length === 0 && currentRepositories.length === 0 && currentIssues.length === 0) {
      return null
    }

    if(isLoading) {
      return <h1 style={{color:'#808080r'}}>Loading ....</h1>
    }
    
    switch (currentType) {
      case "users": 
        return (currentUsers?.map((each: User) => {
          return (
            <GridColumn key={each.id} > 
              <UserCard 
                name={each.name} 
                url={each.url}
                avatar_url={each.avatar_url}
                type={each.type}
              /> 
            </GridColumn>
          )
        }))
      case "repositories": 
        return (currentRepositories?.map((each: Repository) => {
          return (
            <GridColumn key={each.id} > 
              <RepositoryCard 
                name={each.name} 
                url={each.url}
                description={each.description} 
                stargazers_count={each.stargazers_count}  
                forks_count={each.forks_count} 
                language={each.language} 
                owner={each.owner} 
              /> 
            </GridColumn>
          )
        }))
      case "issues": 
        return (issues?.map((each: Issue) => {
          return (
            <GridColumn key={each.id} > 
              <IssueCard 
                title={each.title} 
                url={each.url}
                description={each.description} 
                state={each.state} 
                owner={each.owner} 
              /> 
            </GridColumn>
          )
        }))
    }
  }

  return (
    <div style={{ height: '100vh',position: 'relative',}}>
      <SearchDiv isSearchEnabled={currentText.length >= 3}>
          <div style={{display: 'flex', alignItems: "center"}}>
              <div >
                <img alt={"githubIcon"} src={GithubLogo}/>
              </div>
              <div style={{ paddingLeft: 12}}>
                <div style={{color: "black", fontWeight: "bold"}}>Github Searcher</div>
                <div style={{color: "gray"}}>Search Users or Repositories below </div>
              </div>
          </div>
          <div style={{ display: 'flex', paddingTop: 12}}>
            <div style={{maxWidth: 350, width: '100%'}}>
              <SearchInput
                  value={currentText}
                  label="Search"
                  placeholder="Start typing to search .."
                  onChange={onChangeSearchText}
              />
            </div>
    
            <div style={{marginLeft: 42,}}>
              <select style={{padding: 14, border: '1px solid #DFE5F1', boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)'  }} value={currentType} onChange={onChangeSearchType} >
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
                <option value="issues">Issues</option>
              </select>
            </div>
          </div>
      </SearchDiv>
   
      <div style={{ position: 'relative',top: '180px', padding:32}}>
        <GridRow>
          {renderCards()}
        </GridRow>
      </div>

    </div>
  );
}