
const ImageTags = ({ allTags, tags, activeTagFilters, setActiveTags }) => {
  const toggleTag = (tag) => {
    setActiveTags((prev) => {
      console.log('toggling tag', tag, activeTagFilters)
      const exists = prev.some(t => t.id === tag.id)

      if (exists) {
        // remove
        return prev.filter(t => t.id !== tag.id)
      } else {
        // add
        return [...prev, tag]
      }
    })
  }
  return (
    <>
      { allTags?.length &&
        <div className="image-tags w-100">
          {tags.map((id) => {
            const tag = allTags.find((obj) => obj.id === id);
            if (!tag) {
              console.log('failed to find ' + id)
            }
            return (
              <>
                { tag &&
                  <button type="button"
                  onClick={() => toggleTag(tag)}
                  className="me-2 mt-2 btn btn-primary">
                    { tag.name }
                  </button>
                }
              </>
            )
          })}
        </div>
      }
    </>
  )
}

export default ImageTags
