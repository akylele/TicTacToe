import {BasicContextProvider} from "../Context/Basic";
import {LanguageContextProvider} from "../Context/Language";
import {HistoryContextProvider} from "../Context/History";

const ContextWrapper = ({children}) => {

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