import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <div className='no-match'>
        <h2 className='section title'>
          No cocktails matched your search criteria
        </h2>
      </div>
    )
  }

  return (
    <section className='section-cocktail'>
      <div className='title'>
        <h2 className='section-title'>cocktails</h2>
        <div className='underline'></div>
      </div>

      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
