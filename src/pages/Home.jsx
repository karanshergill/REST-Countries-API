import React from 'react'
import { useState } from 'react';
import { Search } from '../components/Search';
import { Filter } from '../components/Filter';
import { CardsContainer } from '../components/CardsContainer';
import '../App.css'
import '../index.css'

export const Home = () => {
  const [userQuery, setUserQuery] = useState('')
  return (
      <main>
        <div className='flex justify-between max-w-7xl mx-auto gap-6 pt-8'>
          <Search setUserQuery={setUserQuery} />
          <Filter />
        </div>
        <CardsContainer userQuery={userQuery} />
      </main>
  )
}