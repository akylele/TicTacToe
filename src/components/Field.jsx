import React, {useEffect, useState} from 'react'
import Zero from "./Zero";
import Cross from "./Cross";
import '../styles/index.css'
import Empty from "./Empty";
import History from "./History";

const Field = () => {
    const [lastStep, setLastStep] = useState(null)
    const [history, setHistory] = useState([])
    const initialState = [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
    ]
    const [blocks, setBlocks] = useState(initialState)

    const handleClick = (e, index) => {
        const newBlocks =  blocks.map((block, idx) => {
            if(index === idx) {
                if(!lastStep) {
                    setLastStep('zero')
                    return block = 'zero'
                }

                if(lastStep && lastStep === 'zero'){
                    setLastStep('cross')
                    return block = 'cross'
                }

                if(lastStep && lastStep === 'cross'){
                    setLastStep('zero')
                    return block = 'zero'
                }

                return block
            }

            return block
        })
        setBlocks(newBlocks)
    }

    const isSeries = (ft, sd, td, keys) => (ft !== 'empty' && sd !== 'empty' && td !== 'empty' && (ft === sd && ft === td && sd === td) && [ft,keys])

    const theEnd = () => {
        if(blocks.every(block => block !== 'empty')) return true
            return (isSeries(blocks[0],blocks[1],blocks[2],[0,1,2]) ||
                isSeries(blocks[3],blocks[4],blocks[5],[3,4,5]) ||
                isSeries(blocks[6],blocks[7],blocks[8],[6,7,8]) ||
                isSeries(blocks[0],blocks[3],blocks[6],[0,3,6]) ||
                isSeries(blocks[1],blocks[4],blocks[7],[1,4,7]) ||
                isSeries(blocks[2],blocks[5],blocks[8],[2,5,8]) ||
                isSeries(blocks[0],blocks[4],blocks[8],[0,4,8]) ||
                isSeries(blocks[2],blocks[4],blocks[6],[2,4,6])
            )
    }

    useEffect(() => {
        const res = theEnd()
        console.log('==========>res', res)
        if(Array.isArray(res)) {
            const [player, keys] = res
            console.log('==========>keys', keys)

            const message = '| ' + 'win ' + player + ' |'
            setLastStep(null)
            setHistory([...history, blocks])
            setBlocks(initialState)
            alert(message)
        } else if (res) {
            const message = '| ' + 'ничья' + ' |'
            setLastStep(null)
            setHistory([...history, blocks])
            setBlocks(initialState)
            alert(message)
        }
    },[blocks])

    const renderBlocks = () => {
        return blocks.map((block, index) => {
            if(block === 'empty') return <Empty handleClick={(e) => handleClick(e,index)}/>
            if(block === 'zero') return <Zero handleClick={(e) => handleClick(e,index)}/>
            if(block === 'cross') return <Cross handleClick={(e) => handleClick(e,index)}/>
        })
    }

    return (
        <div className="field">
            {renderBlocks()}
            <History history={history}/>
        </div>
    );
}

export default Field;
