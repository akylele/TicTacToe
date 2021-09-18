import React from 'react'

const Empty = ({handleClick}) => {

    return (
       <div className="empty" onClick={handleClick}>
            <span className="material-icons">
            </span>
       </div>
    )
}

export default Empty