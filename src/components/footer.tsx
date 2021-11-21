import {useTranslation} from "react-i18next"
import React from "react";
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss, SiTypescript} from 'react-icons/si'

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className='w-full py-5 px-4 '>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='inline-flex items-center '>
                    <div className='w-3 h-3 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-100 to-blue-700' />
                    <h2
                        className='block p-2 text-xl font-medium tracking-tighter text-blue-700 dark:text-blue-200 lg:text-x lg:mr-8'
                    >
                        {t("footer_title")}
                    </h2>
                </div>
                <div className='inline-flex text-blue-700 dark:text-blue-200 px-2 text-base m-3 md:m-0 '>
                    {t("footer_main-title")}
                    <FaReact className='text-blue-700 dark:text-blue-200 text-2xl  mx-1' />
                    {' , '}
                    <SiTypescript className='text-blue-700 dark:text-blue-200 text-2xl  mx-1' />
                    {' , '}
                    <SiTailwindcss className='text-blue-700 dark:text-blue-200 text-2xl mx-1' />
                    {'  '}
                    {t("footer_main-subtitle")}
                </div>
                <div className='md:footer_box'>
                    <span className='inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start'
                    >
                        <a href={t("footer_git-url")}
                           className='text-blue-700 dark:text-blue-200 hover:font-bold'
                        >
                            {t("footer_git-label")}
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )

}

export default Footer;