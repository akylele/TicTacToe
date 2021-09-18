import React from 'react'
import HistoryField from "./HistoryField";

const History = ({history}) => {

    const renderItems = () => {
        if(history.length) {
            return history.map(elem => (
                <HistoryField historyItem={elem}/>
            ))
        }

        return <p>empty</p>
    }

    return (
        <div>
            <h1>History</h1>
            <br/>
            <div className="history">
                {renderItems()}
            </div>
        </div>
    )
}

export default History