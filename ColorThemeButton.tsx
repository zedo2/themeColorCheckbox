import React, { useContext, useRef } from 'react'

import  { ReactComponent as ColorTheme1 }  from '../../assets/img/colorTheme1.svg'
import  { ReactComponent as ColorTheme2 }  from '../../assets/img/colorTheme2.svg'
import { IThemeContext } from '../AllContext/AllContextProvider'
import ThemeContext from '../AllContext/ThemeContext'


import './ColorThemeButton.less'

const ColorThemeButton = () => {
    const { themeColor, setThemeColor } = useContext<IThemeContext>(ThemeContext)

    const colorThemeBtnRef = useRef<HTMLButtonElement | null>(null)

    const togglreColorTheme = () => {
        colorThemeBtnRef?.current ? colorThemeBtnRef.current.setAttribute(
            'aria-pressed', (themeColor !== 'dark').toString()
        ) : null
        setThemeColor(themeColor === 'dark' ? 'light' : 'dark')
    }

    return (
        <>
            <button className='toggle' aria-pressed='false' onClick={togglreColorTheme} ref={colorThemeBtnRef}>
                <ColorTheme1/>
                <span className='toggle__indicator-wrapper'>
                    <span className='toggle__indicator'>
                        <span className='toggle__star'>
                            <span className='sun'>
                                <span className='moon'>
                                    <span className='moon__crater'></span>
                                    <span className='moon__crater'></span>
                                    <span className='moon__crater'></span>
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
                <ColorTheme2/>
            </button>
        </>
    )
}

export { ColorThemeButton }
