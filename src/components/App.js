import React from 'react'

import GameArea from './GameArea.js'

import '../css/App.css'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
              <GameArea />
            </div>
        )
    }
}

export default App