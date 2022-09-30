import React from 'react'
import CocktailList from '../components/CocktailList'
import RandomButton from '../components/RandomButton'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <RandomButton/>
      <CocktailList/>
    </main>
  )
}

export default Home
