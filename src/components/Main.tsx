import React, {useContext} from 'react'

import {HistoryContext} from "../Context/History";
import {LanguageContext} from "../Context/Language";
import {BasicContext} from "../Context/Basic";

import Field from "./Field";
import Statistics from "./Statistics";
import Button from "./Button";
import History from "./History";
import Alert from "./Alert";

import {getText} from "../locales";

import '../styles/index.scss'

const Main = () => {
    const {history, setHistory, handleClearHistory} = useContext(HistoryContext)
    const {changeLanguage} = useContext(LanguageContext)
    const {alertMessage} = useContext(BasicContext)

    return (
        <>
            {alertMessage && <Alert text={alertMessage}/>}
            <Field history={history} setHistory={setHistory}/>
            <div className="bottomScreen">
                <History history={history}/>
                <Statistics history={history}/>
                <div className="buttons">
                    <Button
                        onClick={handleClearHistory}
                        width={'200px'}
                    >
                        {getText('clearStatistic')}
                    </Button>
                    <Button
                        onClick={changeLanguage}
                        width={'200px'}
                    >
                        {getText('changeLanguage')}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Main