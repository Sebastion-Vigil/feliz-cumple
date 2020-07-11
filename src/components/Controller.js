import React from 'react'

import '../css/Controller.css'

class Controller extends React.Component {
  state = {
    timerIsabela: undefined,
    startButton: 'start'
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
            if (t <= 1) return
          t -= 1
        } else if (d === 'l') {
          if (l <= 1) return
          l -= 1
        } else if (d === 'r') {
          if (l >= 250) return
          l += 1
        } else if (d === 'd') {
          if (t >= 250) return
          t += 1
        }
        newPos.top = `${t}px`
        newPos.left = `${l}px`
        this.props.update(newPos)
      })
    })
  }

  stopTimer = which => { // snooty peeps be trippin' on my code
    console.log('peek-a-boo!')
    clearInterval(this.state[which]) // i does what i does, heard?
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
          <div className='start'>{this.state.startButton}</div>
        </div>
        <div className='button-section'>
          <div className='action'>b</div>
          <div className='action'>a</div>
        </div>
      </div>
    )
  }
}

export default Controller