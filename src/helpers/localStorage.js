const setLS = (history) => {
    localStorage.setItem('Game|history', JSON.stringify(history))
}

const getInitLS = () => {
    return localStorage.getItem('Game|history') ?
        JSON.parse(localStorage.getItem('Game|history')) :
        []
}

const clearLS = () => {
    return localStorage.removeItem('Game|history')
}

const getLanguage = () => {
    return localStorage.getItem('Game|language')
}

const setLanguage = (lang) => {
    return localStorage.setItem('Game|language', lang)
}

export default {
    setLS,
    getInitLS,
    clearLS,
    getLanguage,
    setLanguage
}

