import React from 'react'

import '../css/Controller.css'

class Controller extends React.Component {
    render() {
        return (
            <div className='Controller'>
              <div className='button-section'>
                  <div className='d-pad'>
                      <div className='d-pad-section'>
                          <div className='d-square up'></div>
                      </div>
                      <div className='d-pad-section'>
                          <div className='d-square left'></div>
                          <div className='d-square'></div>
                          <div className='d-square right'></div>
                      </div>
                      <div className='d-pad-section'>
                          <div className='d-square down'></div>
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