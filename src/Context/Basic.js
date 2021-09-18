import React, {useEffect, useState} from "react";

export const BasicContext = React.createContext();

export const BasicContextProvider = ({ children }) => {
    const [alert, setAlert] = useState(null)
    const initialStateForField = [
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

    useEffect(() => {
        setTimeout(() => {
            setAlert(null)
        },3000)
    },[alert])

    return (
        <BasicContext.Provider value={{
            alertMessage: alert,
            setAlert,
            initialStateForField
        }}>
            {children}
        </BasicContext.Provider>
    )
}