import React from 'react'
import ru from './ru'
import en from './en'
import get from 'lodash.get'
import helpers from '../helpers/localStorage'

const locales = { ru, en }

export const getText = (path, parameters) => {
    const language = helpers.getLanguage()
    const text = get(
        locales,
        `${language}.${path}`,
        'INVALID_TEXT_PATH - ' + `${language}.${path}`,
    )

    if (typeof text === 'function') {
        return text(parameters)
    }

    return text
}
