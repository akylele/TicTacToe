import React, {Dispatch, SetStateAction, useEffect, useState} from "react";

interface IBasicContext {
    alertMessage: string | null,
    setAlert: Dispatch<SetStateAction<null>>,
    initialStateForField: string[]
}

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

export const BasicContext = React.createContext<IBasicContext>({
    alertMessage: "",
    initialStateForField: initialStateForField,
    setAlert: () => {},
});

interface IBasicContextProviderProps {
    children?: React.ReactNode,
}

export const BasicContextProvider = ({ children }: IBasicContextProviderProps) => {
    const [alert, setAlert] = useState(null)

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