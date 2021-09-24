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

import {Col, Row} from "react-bootstrap";

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
                <Row className="no-margin">
                    <Col
                        xs={12}
                        sm={6}
                        className='no-padding'
                    >
                        <Button
                            onClick={handleClearHistory}
                        >
                            {getText('clearStatistic')}
                        </Button>
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        className='no-padding'
                    >
                        <Button
                            onClick={changeLanguage}
                        >
                            {getText('changeLanguage')}
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default MainPage