import React from 'react'

const Zero = ({handleClick}) => {

    return (
       <div className="zero" onClick={handleClick}>
            <span className="material-icons">
                radio_button_unchecked
            </span>
       </div>
    )
}

export default Zero