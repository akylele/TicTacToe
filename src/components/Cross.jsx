import React from 'react'

const Cross = ({handleClick}) => {

    return (
        <div className="cross" onClick={(e) => handleClick(e)}>
            <span className="material-icons">
                clear
            </span>
        </div>
    )
}

export default Cross