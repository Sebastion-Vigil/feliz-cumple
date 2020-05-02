import React from 'react'

import '../css/Controller.css'

class Controller extends React.Component {
    render() {
        return (
            <div className='Controller'>
              <div className='button-section'>
                  <div className='d-pad'>
                      <div className='d-pad-section edge'>
                          <div className='up'></div>
                      </div>
                      <div className='d-pad-section middle'>
                          <div className='left'></div>
                          <div className='d-square'></div>
                          <div className='right'></div>
                      </div>
                      <div className='d-pad-section edge'>
                          <div className='down'></div>
                      </div>
                  </div>
              </div>
              <div className='button-section'>
                  <div className='start'>Start</div>
              </div>
              <div className='button-section'>
                  <div className='action'>B</div>
                  <div className='action'>A</div>
              </div>
            </div>
        )
    }
}

export default Controller