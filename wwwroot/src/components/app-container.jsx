import { useState } from 'react'
import ImagesList from './images-list'
import Filters from './filters'
import { useEffect } from 'react'

const AppContainer = () => {
  const [fileDimensionFilters, setFileDimensionFilters] = useState({
    fileSize: { min: '', max: '' },
    width: { min: '', max: '' },
    height: { min: '', max: '' }
  })
  const [activeTagFilters, setActiveTags] = useState([]);
  const [tags, setTags] = useState([])

  fetch('/data/tags.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.length) {
          setTags(data)
        } else {
          setErrorMessage('No tags found')
        }
      })
      .catch((err) => {
        setErrorMessage('Failed to load tags')
      })

  return (
    <>
        <Filters
        setFileDimensionFilters={setFileDimensionFilters}
        fileDimensionFilters={fileDimensionFilters}
        activeTagFilters={activeTagFilters}
        setActiveTags={setActiveTags}
        allTags={tags}
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