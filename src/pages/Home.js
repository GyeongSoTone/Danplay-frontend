import React from 'react'

import MainMenu from '../components/match/MainMenu'
import MatchMenu from '../components/match/MatchMenu'
import SearchMatch from '../components/match/SearchMatch'
import MatchList from '../components/match/MatchList'

const Home = () => {
  return (
    <div>
      <MainMenu />
      <MatchMenu />
      <SearchMatch />
      <MatchList />
    </div>
  )
}

export default Home
