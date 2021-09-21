import React, {useContext, useEffect, useState} from 'react'
import Button from "../components/Button";
import {HistoryContext} from "../Context/History";
import {Link, useParams} from "react-router-dom";
import GamePlayField from "../components/GamePlayField";
import {getText} from "../locales";
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
                if(i === currentHistory.strokeHistory.length - 2) {
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
                <Button
                    width={'100%'}
                    disabled={loading}
                    onClick={() => play()}
                >
                    {getText('play')}
                    {loading && <Loader/>}
                </Button>
                <Button
                    width={'100%'}

                    disabled={loading}
                    onClick={() => move + 1 !== currentHistory.strokeHistory.length && setMove(move + 1)}
                >
                    {getText('nextMove')}
                </Button>
                <Button
                    width={'100%'}

                    disabled={loading}
                    onClick={() => move - 1 !== -1 && setMove(move - 1)}
                >
                    {getText('lastMove')}
                </Button>

                <Link to={'/'}>
                    <Button
                        width={'100%'}
                    >
                        {getText('goBack')}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default GamePlayPage