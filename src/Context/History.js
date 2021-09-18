import React, {useEffect, useState} from "react";

import helpers from "../helpers/localStorage";
import localStorage from "../helpers/localStorage";

export const HistoryContext = React.createContext();

export const HistoryContextProvider = ({ children }) => {
    const [history, setHistory] = useState(helpers.getInitLS())

    const handleSetHistory = (newHistory) => {
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