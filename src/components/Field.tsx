import React, {useContext, useEffect, useState} from 'react'

import Zero from "./Zero";
import Cross from "./Cross";
import Empty from "./Empty";

import {BasicContext} from "../Context/Basic";
import {getText} from "../locales";
import {IHistoryElem} from "../types/types";

interface IFieldProps {
    history: IHistoryElem[] | [],
    setHistory: (historyElems: IHistoryElem[] | []) => void
}

const Field = ({history, setHistory}: IFieldProps) => {
    const {setAlert, initialStateForField} = useContext(BasicContext)

    const [lastStep, setLastStep] = useState<string | null>(null)
    const [blocks, setBlocks] = useState(initialStateForField)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const newBlocks = blocks.map((block: string, idx: number) => {
            if (index === idx) {
                if (!lastStep) {
                    setLastStep('zero')
                    return block = 'zero'
                }

                if (lastStep && lastStep === 'zero') {
                    setLastStep('cross')
                    return block = 'cross'
                }

                if (lastStep && lastStep === 'cross') {
                    setLastStep('zero')
                    return block = 'zero'
                }

                return block
            }

            return block
        })
        setBlocks(newBlocks)
    }

    const isSeries = (ft: string, sd: string, td: string, keys: number[]) => (ft !== 'empty' && sd !== 'empty' && td !== 'empty' && (ft === sd && ft === td && sd === td) && [ft, keys])

    const isTheEnd = () => {
        const checkIsSeries = (
            isSeries(blocks[0], blocks[1], blocks[2], [0, 1, 2]) ||
            isSeries(blocks[3], blocks[4], blocks[5], [3, 4, 5]) ||
            isSeries(blocks[6], blocks[7], blocks[8], [6, 7, 8]) ||
            isSeries(blocks[0], blocks[3], blocks[6], [0, 3, 6]) ||
            isSeries(blocks[1], blocks[4], blocks[7], [1, 4, 7]) ||
            isSeries(blocks[2], blocks[5], blocks[8], [2, 5, 8]) ||
            isSeries(blocks[0], blocks[4], blocks[8], [0, 4, 8]) ||
            isSeries(blocks[2], blocks[4], blocks[6], [2, 4, 6])
        )
        if (checkIsSeries) return checkIsSeries
        else if (blocks.every((block: string) => block !== 'empty')) return true
        return false
    }

    const theEnd = (isTheEnd: any) => {
        if (Array.isArray(isTheEnd)) {
            const [player, keys] = isTheEnd
            const message = player === 'zero' ? getText('zerosWin') : getText('crossesWin')

            setLastStep(null)
            setHistory([...history, {
                field: blocks,
                keys,
                player
            }])
            setBlocks(initialStateForField)
            setAlert(message)
        } else if (isTheEnd) {
            const message = getText('draw')

            setLastStep(null)
            setHistory([...history, {
                field: blocks,
                keys: [],
                player: 'draw'
            }])
            setBlocks(initialStateForField)
            setAlert(message)
        }
    }

    useEffect(() => {
        theEnd(isTheEnd())
    }, [blocks])

    useEffect(() => {
        setHistory(history)
    }, [history])

    const renderBlocks = () => {
        return blocks.map((block: string, index: number) => {
            if (block === 'empty') return <Empty key={index} onClick={(e) => handleClick(e, index)}/>
            if (block === 'zero') return <Zero key={index} />
            if (block === 'cross') return <Cross key={index} />
            return null
        })
    }

    return (
        <div className="field">
            {renderBlocks()}
        </div>
    );
}

export default Field;
