import React from 'react'

import {SwitchTheme} from './components/switchTheme'
import SwitchLang from "./components/switchLang";

import {useTranslation} from 'react-i18next';


function App() {
    const {t} = useTranslation();

    return (
        <>

            <div className='bg-secondary h-full'>
                <header className='h-1/4 bg-primary-background shadow-xl '>
                    <div className='grid justify-items-end sticky top-1 '>
                        <SwitchTheme />
                        <SwitchLang />
                    </div>
                </header>

                <div className='text-center mt-5'>

                    <div><h1 className='text-primary'>{t("maintitle")}</h1></div>
                </div>
                <footer>

                </footer>
            </div>
        </>

    );
}

export default App;
