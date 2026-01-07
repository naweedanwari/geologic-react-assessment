import { useEffect, useState } from 'react'
import ImageCard from './image-card'


const ImagesList = ({activeTagFilters, setActiveTags, fileDimensionFilters}) => {
  const [images, setImages] = useState([])
  const [tags, setTags] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetch('/data/images.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.length) {
          setImages(data)
        } else {
          setErrorMessage('No images found')
        }
      })
      .catch((err) => {
        setErrorMessage('Failed to load images')
      })

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
  }, [])

  return (
    <>
      { errorMessage &&
        <div className="alert alert-danger" role="alert">
          { errorMessage }
        </div>
      }
      <div className="images-list mt-5 w-100 row">
        {images
  .filter(item => {
    if (fileDimensionFilters.fileSize['min'] !== "" && item.file["size (MB)"] < parseFloat(fileDimensionFilters.fileSize['min'])) {
      return false
    }

    if (fileDimensionFilters.fileSize['max'] !== "" && item.file["size (MB)"] > parseFloat(fileDimensionFilters.fileSize['max'])) {
      return false
    }

    if (fileDimensionFilters.height['min'] !== "" && item.dimensions.height < parseFloat(fileDimensionFilters.height['min'])) {
      return false
    }

    if (fileDimensionFilters.height['max'] !== "" && item.dimensions.height > parseFloat(fileDimensionFilters.height['max'])) {
      return false
    }

    if (fileDimensionFilters.width['min'] !== "" && item.dimensions.width < parseFloat(fileDimensionFilters.width['min'])) {
      return false
    }

    if (fileDimensionFilters.width['max'] !== "" && item.dimensions.width > parseFloat(fileDimensionFilters.width['max'])) {
      return false
    }
  
    return activeTagFilters.every(tag =>
      item.tags.includes(tag.id)
    )
  })
  .map(item => (
    <ImageCard
      key={`${item.id}-imageCard`}
      allTags={tags}
      image={item}
      activeTagFilters={activeTagFilters}
      setActiveTags={setActiveTags}
    />
  ))
}
        {/* {images.filter(item => {
          let hasFilteredTag = false;
          activeTagFilters.forEach(activeTagFilter => {
            if (item.tags.includes(activeTagFilter)) {
              hasFilteredTag = true; 
            }
          })
          return hasFilteredTag;
        }).map((item) => {
          return (
            <ImageCard
              key={`${item.id}-imageCard`}
              allTags={tags}
              image={item}
              activeTagFilters={activeTagFilters}
              setActiveTags={setActiveTags}
            />
          )
        })} */}
      </div>
    </>
  )
}

export default ImagesList
