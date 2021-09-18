import React from 'react'

import Zero from "./Zero";
import Cross from "./Cross";
import Empty from "./Empty";


const HistoryField = ({historyItem}) => {
    const {
        field,
        keys
    } = historyItem

    const renderBlocks = () => {
        if(field.length) {
            return field.map((item, index) => {
                const isWin = keys.includes(index)
                if(item === 'empty') return <Empty />
                if(item === 'zero') return <Zero isWin={isWin}/>
                if(item === 'cross') return <Cross isWin={isWin}/>
            })
        }

        return null
    }

    return (
        <div className="history-field">
            {renderBlocks()}
        </div>
    );
}

export default HistoryField;
