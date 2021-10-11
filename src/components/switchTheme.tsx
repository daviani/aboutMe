import React, {useEffect, useState} from 'react'
import {DEFAULT_THEME} from "../themes"
import {applyTheme} from "../themes/utils"
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

type SwitchThemeProps = {
    onClick?: () => void
}

export const SwitchTheme: React.FunctionComponent<SwitchThemeProps> =
    ({
         onClick = () => {
         }
     }
         : SwitchThemeProps) => {
        const [theme, setTheme] = useState(DEFAULT_THEME);

        useEffect(() => {
            applyTheme(theme)
        }, [theme])

        return (
            <button className='outline-none focus:outline-none px-4 py-2 text-primary'
                    type='button'
                    onClick={() => onClick()}
            >
                {theme === 'base' ? (
                    <div onClick={() => setTheme('dark')}>
                        <FontAwesomeIcon icon={faMoon} />
                    </div>
                ) : (
                    <div onClick={() => setTheme('base')}>
                        <FontAwesomeIcon icon={faSun} />
                    </div>
                )}
            </button>
        )
    }