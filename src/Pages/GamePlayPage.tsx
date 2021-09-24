import React, {useContext, useEffect, useState} from 'react'
import {Col, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";

import {HistoryContext} from "../Context/History";
import {getText} from "../locales";

import Button from "../components/Button";
import GamePlayField from "../components/GamePlayField";
import Loader from "../components/Loader";

const GamePlayPage = () => {
    const {history} = useContext(HistoryContext)
    const {id}: { id: string } = useParams()
    const [move, setMove] = useState(0)
    const [loading, setLoading] = useState(false)
    const currentHistory = history[+id]

    useEffect(() => {
        if (!currentHistory) {
            window.location.href = '/'
        }

        play()
    }, [])

    const play = () => {
        setLoading(true)
        setMove(0)
        for (let i = 0; i < currentHistory.strokeHistory.length - 1; i++) {
            setTimeout(() => {
                if (i === currentHistory.strokeHistory.length - 2) {
                    setLoading(false)
                }
                setMove(i + 1)
            }, (i + 1) * 500)
        }
    }

    if (!currentHistory) {
        return null
    }

    return (
        <div className="game-play_wrapper">
            <GamePlayField field={currentHistory.strokeHistory[move]} keys={currentHistory.keys}/>
            <div className="buttons">
                <Row
                    className='no-margin'
                >
                    <Col
                        xs={12}
                        sm={6}
                        md={3}
                        className='no-padding'
                    >
                        <Button
                            width={'100%'}
                            disabled={loading}
                            onClick={() => play()}
                        >
                            {getText('play')}
                            {loading && <Loader/>}
                        </Button>
                    </Col>
                    <br/>
                    <Col
                        xs={6}
                        sm={6}
                        md={3}
                        className='no-padding'
                    >
                        <Button
                            disabled={loading}
                            onClick={() => move + 1 !== currentHistory.strokeHistory.length && setMove(move + 1)}
                        >
                            {getText('nextMove')}
                        </Button>

                    </Col>
                    <Col
                        xs={6}
                        sm={6}
                        md={3}
                        className='no-padding'
                    >
                        <Button
                            disabled={loading}
                            onClick={() => move - 1 !== -1 && setMove(move - 1)}
                        >
                            {getText('lastMove')}
                        </Button>
                    </Col>
                    <br/>
                    <Col
                        xs={12}
                        sm={12}
                        md={3}
                        className='no-padding'
                    >
                        <Link to={'/'}>
                            <Button
                                width={'100%'}
                            >
                                {getText('goBack')}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default GamePlayPage