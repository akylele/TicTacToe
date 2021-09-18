import React, {useEffect, useState} from 'react'
import Zero from "./Zero";
import Cross from "./Cross";
import '../styles/index.css'
import Empty from "./Empty";
import History from "./History";

const HistoryField = ({historyItem}) => {
    const renderBlocks = () => {
        console.log('==========>historyItem', historyItem)
        if(historyItem.length) {
            return historyItem.map((item) => {
                if(item === 'empty') return <Empty/>
                if(item === 'zero') return <Zero/>
                if(item === 'cross') return <Cross/>
            })
        }

        return null
    }

    return (
        <>
            <div className="history-field">
                {renderBlocks()}
            </div>
        </>

    );
}

export default HistoryField;
