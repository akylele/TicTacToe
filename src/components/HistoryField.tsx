import React from 'react'

import Zero from "./Zero";
import Cross from "./Cross";
import Empty from "./Empty";
import {IHistoryElem} from "../types/types";

interface IHistoryFieldProps {
    historyItem: IHistoryElem,
}

const HistoryField = ({historyItem}: IHistoryFieldProps) => {
    const {
        field,
        keys
    } = historyItem

    const renderBlocks = () => {
        if(field.length) {
            return field.map((block: string, index: number) => {
                // @ts-ignore
                const isWin = keys.includes(index)
                if(block === 'empty') return <Empty key={index}/>
                if(block === 'zero') return <Zero key={index} isWin={isWin}/>
                if(block === 'cross') return <Cross key={index} isWin={isWin}/>
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
