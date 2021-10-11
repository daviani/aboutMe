import {SwitchTheme} from "./switchTheme";
import SwitchLang from "./switchLang";
import React from "react";
import {useTranslation} from "react-i18next";

function Header() {
    const {t} = useTranslation();

    return (
        <>
            <header className='mx-auto'>
                <div className='config_box'>
                    <SwitchTheme />
                    <SwitchLang />
                </div>
                <div className='flex flex-col mb-12 text-left lg:text-center'>
                    <div
                        className='inline-flex items-center justify-center flex-shrink-0  mx-auto mb-3 text-black rounded-full mt-2.5'
                    >
                        <img className='rounded-full border-4 border-primary w-40 h-40 img '
                             src='https://nano.site/api/image/4f8a5c5f-d9ab-46fe-b28f-08d8d81aa339'
                             alt='daviani'
                        />
                    </div>
                    <h1 className='mx-auto mb-4 text-4xl font-semibold text-primary tracking-tighter lg:w-1/2 lg:text-3xl'>
                        {'<Daviani/>'}
                    </h1>
                    <div
                        className='mx-auto text-base leading-relaxed text-center text-primary mb-2.5 lg:w-1/2'
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