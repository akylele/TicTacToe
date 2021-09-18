import React, {useEffect, useState} from "react";

import helpers from "../helpers/localStorage";
import localStorage from "../helpers/localStorage";

export const HistoryContext = React.createContext();

export const HistoryContextProvider = ({ children }) => {
    const [history, setHistory] = useState(helpers.getInitLS())
    const [language, setLanguage] = useState(helpers.getLanguage())

    useEffect(() => {
        if(!helpers.getLanguage()) {
            changeLanguage()
        }
    },[])

    const handleSetHistory = (newHistory) => {
        setHistory(newHistory)
        helpers.setLS(newHistory)
    }

    const handleClearHistory = () => {
        helpers.clearLS()
        setHistory([])
    }

    const changeLanguage = () => {
        if(language === 'en') {
            setLanguage('ru')
            helpers.setLanguage('ru')
        } else {
            setLanguage('en')
            helpers.setLanguage('en')
        }
    }

    return (
        <HistoryContext.Provider value={{
            history,
            setHistory: handleSetHistory,
            handleClearHistory,
            changeLanguage,
            language
        }}>
            {children}
        </HistoryContext.Provider>
    )
}