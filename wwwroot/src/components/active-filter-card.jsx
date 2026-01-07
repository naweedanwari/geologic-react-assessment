
const ActiveFilterCard = ({ tag, setActiveTags }) => {
  return (
    <div className="mx-1">
        <button onClick={() => setActiveTags(prev =>
        prev.filter(t => t.id !== tag.id)
        )}>
        {tag.name}&nbsp;X
        </button>
    </div>
    
  )
}

export default ActiveFilterCard
