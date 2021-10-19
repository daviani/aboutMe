import React, {useContext} from 'react'
import { ThemeContext } from '../context/themeContext'
import { HiMoon, HiSun } from 'react-icons/hi';

export const SwitchTheme = () => {
    const {theme, setTheme} =useContext(ThemeContext)

    return (
        <div className="transition duration-500 ease-in-out rounded-full px-4 py-2">
            {theme === 'dark' ? (
                <HiSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-blue-700 dark:text-blue-200 text-2xl cursor-pointer"
                />
            ) : (
                <HiMoon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-blue-700 dark:text-blue-200 text-2xl cursor-pointer"
                />
            )}
        </div>
        )
    }


