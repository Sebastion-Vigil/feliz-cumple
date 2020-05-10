import React from 'react'

import '../css/Isabela.css'

const Isabela = (props) => {
    return (
        <div 
          className='Isabela'
          style={{
              top: props.top,
              left: props.left
          }}
        ></div>
    )
}

export default Isabela