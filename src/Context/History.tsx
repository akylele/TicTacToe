import React, {useState} from "react";

import helpers from "../helpers/localStorage";
import {IHistoryElem} from "../types/types";

interface IHistoryContext {
    history: IHistoryElem[] | [],
    setHistory: (newHistory: IHistoryElem[] | []) => void,
    handleClearHistory: () => void
}

export const HistoryContext = React.createContext<IHistoryContext>({
    history: [],
    setHistory: () => {},
    handleClearHistory: () => {}
});

interface IHistoryContextProviderProps {
    children?: React.ReactNode,
}

export const HistoryContextProvider = ({ children }: IHistoryContextProviderProps) => {
    const [history, setHistory] = useState(helpers.getInitLS())

    const handleSetHistory = (newHistory: IHistoryElem[] | []) => {
        setHistory(newHistory)
        helpers.setLS(newHistory)
    }

    const handleClearHistory = () => {
        helpers.clearLS()
        setHistory([])
    }

    return (
        <HistoryContext.Provider value={{
            history,
            setHistory: handleSetHistory,
            handleClearHistory
        }}>
            {children}
        </HistoryContext.Provider>
    )
}