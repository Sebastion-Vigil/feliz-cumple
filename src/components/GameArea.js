import React from 'react'

import GameScreen from './GameScreen.js'
import Controller from './Controller.js'

import '../css/GameArea.css'

class GameArea extends React.Component {
    // make controller send props up to state
    // then send to GameScreen -> Game
    // ...note to self...LEARN Redux!
    state={
        IsaPosition: {
            top: '1px',
            left: '1px'
        }
    }
    
    updateIsaPosition = (update) => {
      this.setState({
          IsaPosition: update
      })
    }

    render() {
        return (
            <div className='GameArea'>
              <GameScreen
                top={this.state.IsaPosition.top}
                left={this.state.IsaPosition.left} 
              />
              <Controller
                pos={this.state.IsaPosition}
                update={this.updateIsaPosition} 
              />
            </div>
        )
    }
}

export default GameArea