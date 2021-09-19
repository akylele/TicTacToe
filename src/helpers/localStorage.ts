import {IHistoryElem} from "../types/types";

const setLS = (history: IHistoryElem[] | []) => {
    localStorage.setItem('Game|history', JSON.stringify(history))
}

const getInitLS = () => {
    if (localStorage.getItem('Game|history') as string | null) {
        return JSON.parse(localStorage.getItem('Game|history') as string)
    }
    return []
}

const clearLS = () => {
    return localStorage.removeItem('Game|history')
}

const getLanguage = () => {
    if (localStorage.getItem('Game|language') as string | null) {
        return localStorage.getItem('Game|language') as string
    }
    return 'ru'
}

const setLanguage = (lang: string) => {
    return localStorage.setItem('Game|language', lang)
}

export default {
    setLS,
    getInitLS,
    clearLS,
    getLanguage,
    setLanguage
}

