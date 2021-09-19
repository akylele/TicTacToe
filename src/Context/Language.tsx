import React, {useEffect, useState} from "react";

import helpers from "../helpers/localStorage";
import localStorage from "../helpers/localStorage";
import {IHistoryElem} from "../types/types";


interface ILanguageContextProviderProps {
    children?: React.ReactNode,
}

interface ILanguageContext {
    changeLanguage: () => void,
    language: string
}

export const LanguageContext = React.createContext<ILanguageContext>({
    changeLanguage: () => {},
    language: 'ru'
});

export const LanguageContextProvider = ({ children }: ILanguageContextProviderProps) => {
    const [language, setLanguage] = useState<string>(helpers.getLanguage())

    useEffect(() => {
        if(!helpers.getLanguage()) {
            changeLanguage()
        }
    },[])

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
        <LanguageContext.Provider value={{
            changeLanguage,
            language
        }}>
            {children}
        </LanguageContext.Provider>
    )
}