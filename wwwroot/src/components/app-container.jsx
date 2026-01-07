import { useState } from 'react'
import ImagesList from './images-list'
import Filters from './filters'

const AppContainer = () => {
  const [fileDimensionFilters, setFileDimensionFilters] = useState({
    fileSize: { min: '', max: '' },
    width: { min: '', max: '' },
    height: { min: '', max: '' }
  })
  const [activeTagFilters, setActiveTags] = useState([]);

  return (
    <>
        <Filters
        setFileDimensionFilters={setFileDimensionFilters}
        fileDimensionFilters={fileDimensionFilters}
        activeTagFilters={activeTagFilters}
        setActiveTags={setActiveTags}
        />
        <ImagesList
        fileDimensionFilters={fileDimensionFilters}
        activeTagFilters={activeTagFilters}
        setActiveTags={setActiveTags}
        />
    </>
  )
}

export default AppContainer