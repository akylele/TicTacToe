import React from 'react'

import HistoryField from "./HistoryField";

import {getText} from "../locales";
import {IHistoryElem} from "../types/types";

interface IHistoryProps {
    history: IHistoryElem[] | [],
}

const History = ({history}: IHistoryProps) => {

    const renderItems = () => {
        if (history.length) {
            return history.map((historyItem, index) => (
                <HistoryField key={index} historyItem={historyItem}/>
            ))
        }

        return <span>{getText('emptyHistory')}</span>
    }

    return (
        <div className="historyWrapper">
            <h1>{getText('history')}</h1>
            <br/>
            <div className="historyFieldsWrapper">
                <div className="historyFields">
                    {renderItems()}
                </div>
            </div>
        </div>
    )
}

export default History