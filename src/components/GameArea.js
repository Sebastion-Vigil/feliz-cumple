import React from 'react'

import GameScreen from './GameScreen.js'
import Controller from './Controller.js'

import '../css/GameArea.css'

class GameArea extends React.Component {
    render() {
        return (
            <div className='GameArea'>
              <GameScreen />
              <Controller />
            </div>
        )
    }
}

export default GameArea