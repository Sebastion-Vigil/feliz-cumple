import React from 'react'

import Isabela from './Isabela.js'
import Background from './Background.js'

import '../css/Game.css'
// top level of game
class Game extends React.Component {
    render() {
        return (
            <div className='Game'>
                <Background />
                <Isabela
                  top={this.props.top}
                  left={this.props.left}
                />
            </div>
        )
    }
}

export default Game