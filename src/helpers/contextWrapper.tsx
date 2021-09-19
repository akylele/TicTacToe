import {BasicContextProvider} from "../Context/Basic";
import {LanguageContextProvider} from "../Context/Language";
import {HistoryContextProvider} from "../Context/History";
import React from "react";

interface IContextWrapperProps {
    children?: React.ReactNode,
}

const ContextWrapper = ({children}: IContextWrapperProps) => {

    return (
        <BasicContextProvider>
            <LanguageContextProvider>
                <HistoryContextProvider>
                    {children}
                </HistoryContextProvider>
            </LanguageContextProvider>
        </BasicContextProvider>
    )
}

export default ContextWrapper