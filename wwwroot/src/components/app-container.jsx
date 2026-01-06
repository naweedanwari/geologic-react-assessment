import { useState } from 'react'
import ImagesList from './images-list'
import Filters from './filters'

const AppContainer = () => {
  const [activeTagFilters, setActiveTags] = useState([]);

  return (
    <>
        <Filters 
        activeTagFilters={activeTagFilters}
        setActiveTags={setActiveTags}
        />
        <ImagesList 
        activeTagFilters={activeTagFilters}
        setActiveTags={setActiveTags}
        />
    </>
  )
}

export default AppContainer