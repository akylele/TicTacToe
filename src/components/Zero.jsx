import React from 'react'

const Zero = ({isWin}) => (
    <div className={`zero ${isWin ? 'red' : ''}`}>
            <span className="material-icons">
                radio_button_unchecked
            </span>
    </div>
)

export default Zero