import React from 'react'

import Game from './Game.js'

import '../css/GameScreen.css'

class GameScreen extends React.Component {
    render() {
        return (
            <div className='GameScreen'>
              <Game
                top={this.props.top}
                left={this.props.left} 
              />
            </div>
        )
    }
}

export default GameScreen