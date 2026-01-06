
const ActiveFilterCard = ({ tag, setActiveTags }) => {

    const removeTag = (tag) => {
    setActiveTags((prev) => {
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
    <div>
        {tag.name}
        <button onClick={removeTag(tag)}></button>
    </div>
  )
}

export default ActiveFilterCard
