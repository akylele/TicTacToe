import React from 'react'

import HistoryField from "./HistoryField";

import {getText} from "../locales";
import {IHistoryElem} from "../types/types";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import Icon from "./Icon";

interface IHistoryProps {
    history: IHistoryElem[] | [],
}

const History = ({history}: IHistoryProps) => {

    const renderItems = () => {
        if (history.length) {
            return history.map((historyItem, index) => (
                <Link to={`gameplay/${index}`}>
                    <HistoryField key={index} historyItem={historyItem}/>
                </Link>
            ))
        }

        return (
            <>
                <Icon iconName={'hourglass_empty'}/>
                <span>{getText('emptyHistory')}</span>
            </>
        )
    }

    return (
        <Container>
            <div className="historyWrapper">
                <h1>{getText('history')}</h1>
                <br/>
                <div className="historyFieldsWrapper">
                    <div className="historyFields">
                        {renderItems()}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default History