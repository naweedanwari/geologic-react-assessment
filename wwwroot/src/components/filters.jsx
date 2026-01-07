import ActiveFilterCard from "./active-filter-card";

const Filters = ({activeTagFilters, setActiveTags, fileDimensionFilters, setFileDimensionFilters}) => {
  const updateFilter = (section, key, value) => {
    setFileDimensionFilters(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }))
  }

  return (
    <div className='filters-container container mt-3'>
      <div className="mb-2 d-flex">
        <button className="mx-1" onClick={() => {
          setActiveTags(_ => []);
          setFileDimensionFilters(_ => {
            return {
              fileSize: { min: '', max: '' },
              width: { min: '', max: '' },
              height: { min: '', max: '' }
            }
          })
        }
        }>Clear active filters</button>
      </div>
      <div className='mb-2 w-100'>
        <div className='col-3 text-end'>
          <h3>Tags:</h3>
        </div>
        {activeTagFilters.length !== 0 && (
          <div style={{display: 'flex'}}>
            {Array.isArray(activeTagFilters) && activeTagFilters.map(tag => (
              <ActiveFilterCard key={tag.id}
              tag={tag}
              setActiveTags={setActiveTags}/>
            ))}
          </div>
        )}
        <div className='col-8' style={{ display: activeTagFilters.length === 0  ? 'block' : 'none' }}>
          None selected
        </div>
      </div>
      <div className='row mb-2 w-100'>
        <div className='col-3 text-end'>
          <h3>File Size:</h3>
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className="input-group" style={{ maxWidth: '9rem' }}>
              <div className="input-group-prepend">
                <span className="input-group-text">&gt;=</span>
              </div>
              <input type="number" className="form-control" step="0.1" 
              value={fileDimensionFilters.fileSize.min}
              onChange={e => updateFilter('fileSize', 'min', e.target.value)}
              />
            </div>
            <div className="input-group" style={{ maxWidth: '9rem' }}>
              <input type="number" className="form-control" step="0.1"
              value={fileDimensionFilters.fileSize.max}
              onChange={e => updateFilter('fileSize', 'max', e.target.value)} 
              />
              <div className="input-group-append">
                <span className="input-group-text">&lt;=</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row w-100'>
        <div className='col-3 text-end'>
          <h3>Dimensions:</h3>
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className='col-auto'>
              <div className='row'>
                <h5 className='col mb-0 pb-0 mt-2'>Width:</h5>
                <div className="input-group" style={{ maxWidth: '10rem' }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text">&gt;=</span>
                  </div>
                  <input type="number" className="form-control" step="100" 
                  value={fileDimensionFilters.width.min}
                  onChange={e => updateFilter('width', 'min', e.target.value)}/>
                </div>
                <div className="input-group" style={{ maxWidth: '10rem' }}>
                  <input type="number" className="form-control" step="100" 
                  value={fileDimensionFilters.width.max}
                  onChange={e => updateFilter('width', 'max', e.target.value)}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">&lt;=</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-auto'>
              <div className='row'>
                <h5 className='col mb-0 pb-0 mt-2'>Height:</h5>
                <div className="input-group" style={{ maxWidth: '10rem' }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text">&gt;=</span>
                  </div>
                  <input type="number" className="form-control" step="100" 
                  value={fileDimensionFilters.height.min}
                  onChange={e => updateFilter('height', 'min', e.target.value)}/>
                </div>
                <div className="input-group" style={{ maxWidth: '10rem' }}>
                  <input type="number" className="form-control" step="100" 
                  value={fileDimensionFilters.height.max}
                  onChange={e => updateFilter('height', 'max', e.target.value)}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">&lt;=</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
