import React from 'react'

import '../css/Controller.css'

class Controller extends React.Component {
  state = {
    timerIsabela: undefined,
    startButton: 'start' // pass to markup later
  }

  DPadHandler = d => {
    this.setState({
      timerIsabela: setInterval(() => {
        const newPos = {
          top: this.props.pos.top,
          left: this.props.pos.left
        }

        let t = parseInt(newPos.top)
        let l = parseInt(newPos.left)

        if (d === 'u') {
          //   if (t <= 0) return
          t -= 1
        } else if (d === 'l') {
          // if (l <= 0) return
          l -= 1
        } else if (d === 'r') {
          // if (l >= 100) return
          l += 1
        } else if (d === 'd') {
          // if (t >= 100) return
          t += 1
        }
        newPos.top = t + 'px'
        newPos.left = l + 'px'
        this.props.update(newPos)
      })
    })
  }

  stopTimer = which => {
    clearInterval(this.state[which])
  }

  render () {
    return (
      <div className='Controller'>
        <div className='button-section'>
          <div className='d-pad'>
            <div className='d-pad-section edge'>
              <div
                className='up'
                onMouseDown={() => this.DPadHandler('u')}
                onMouseUp={() => this.stopTimer('timerIsabela')}
              ></div>
            </div>
            <div className='d-pad-section middle'>
              <div
                className='left'
                onMouseDown={() => this.DPadHandler('l')}
                onMouseUp={() => this.stopTimer('timerIsabela')}
              ></div>
              <div className='d-square'></div>
              <div
                className='right'
                onMouseDown={() => this.DPadHandler('r')}
                onMouseUp={() => this.stopTimer('timerIsabela')}
              ></div>
            </div>
            <div className='d-pad-section edge'>
              <div
                className='down'
                onMouseDown={() => this.DPadHandler('d')}
                onMouseUp={() => this.stopTimer('timerIsabela')}
              ></div>
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
