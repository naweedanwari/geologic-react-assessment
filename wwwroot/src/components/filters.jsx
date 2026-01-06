// A list defining all currently applied tag filters
const activeTagFilters = [];
const Filters = () => {
  return (
    <div className='filters-container container mt-3'>
      <div className='row mb-2 w-100'>
        <div className='col-3 text-end'>
          <h3>Tags:</h3>
        </div>
        {activeTagFilters.length !== 0 && (
          <div>
            Content
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
                <span class="input-group-text">&gt;=</span>
              </div>
              <input type="number" class="form-control" step="0.1" />
            </div>
            <div className="input-group" style={{ maxWidth: '9rem' }}>
              <input type="number" class="form-control" step="0.1" />
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
                <div class="input-group" style={{ maxWidth: '10rem' }}>
                  <div class="input-group-prepend">
                    <span class="input-group-text">&gt;=</span>
                  </div>
                  <input type="number" class="form-control" step="100" />
                </div>
                <div class="input-group" style={{ maxWidth: '10rem' }}>
                  <input type="number" class="form-control" step="100" />
                  <div class="input-group-append">
                    <span class="input-group-text">&lt;=</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-auto'>
              <div className='row'>
                <h5 className='col mb-0 pb-0 mt-2'>Height:</h5>
                <div class="input-group" style={{ maxWidth: '10rem' }}>
                  <div class="input-group-prepend">
                    <span class="input-group-text">&gt;=</span>
                  </div>
                  <input type="number" class="form-control" step="100" />
                </div>
                <div class="input-group" style={{ maxWidth: '10rem' }}>
                  <input type="number" class="form-control" step="100" />
                  <div class="input-group-append">
                    <span class="input-group-text">&lt;=</span>
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
