import {SwitchTheme} from "./switchTheme";
import SwitchLang from "./switchLang";
import React from "react";
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t} = useTranslation();

    return (
        <>
            <header className='mx-auto'>
                <div className='config_box'>
                    <SwitchTheme />
                    <SwitchLang />
                </div>
                <div className='flex flex-col text-left lg:text-center'>
                    <div
                        className='inline-flex items-center justify-center flex-shrink-0  mx-auto mb-3 rounded-full mt-2.5'
                    >
                        <img className='rounded-full border-4 border-blue-700 dark:border-blue-200 w-40 h-40'
                             src='https://nano.site/api/image/4f8a5c5f-d9ab-46fe-b28f-08d8d81aa339'
                             alt="It's Me"
                        />
                    </div>
                    <h1 className='mx-auto mb-4 text-4xl font-semibold text-blue-800 dark:text-blue-100  tracking-tighter transition duration-500 ease-in-out transform lg:w-1/2 lg:text-3xl'>
                        {'<Daviani/>'}
                    </h1>
                    <div
                        className='mx-auto leading-relaxed text-center text-blue-700 dark:text-blue-200 mb-2.5 text-xs sm:text-base lg:w-1/2'
                    >
                        {t('header_title')}
                        <br />
                        {t('header_subtitle')}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;