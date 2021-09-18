import React, {useEffect, useState} from "react";

import helpers from "../helpers/localStorage";
import localStorage from "../helpers/localStorage";

export const LanguageContext = React.createContext();

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(helpers.getLanguage())

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