import { useState } from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { CardsContainer } from './components/CardsContainer';
import './App.css'
import './index.css'

function App() {
  const [userQuery, setUserQuery] = useState('')
  return (
    <>
      <Header />
      <main>
        <div className='flex justify-between max-w-7xl mx-auto gap-6 pt-8'>
          <Search setUserQuery={setUserQuery} />
          <Filter />
        </div>
        <CardsContainer userQuery={userQuery} />
      </main>
    </>
  )
}

export default App
