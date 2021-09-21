import React, {useContext} from 'react'

import {HistoryContext} from "../Context/History";
import {LanguageContext} from "../Context/Language";
import {BasicContext} from "../Context/Basic";

import Field from "../components/Field";
import Statistics from "../components/Statistics";
import Button from "../components/Button";
import History from "../components/History";
import Alert from "../components/Alert";

import {getText} from "../locales";

import '../styles/index.scss'

const MainPage = () => {
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
                <div className="buttons nowrap">
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

export default MainPage