import { Header } from './components/Header';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { CardsContainer } from './components/CardsContainer';
import './App.css'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='flex justify-between max-w-7xl mx-auto gap-6 pt-8'>
          <Search />
          <Filter />
        </div>
        < CardsContainer />
      </main>
    </>
  )
}

export default App
