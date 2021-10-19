import {useTranslation} from "react-i18next";
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React from "react";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className='w-full py-5 px-4 '>
            <div className='flex items-center justify-between'>
                <div className='inline-flex items-center '>
                    <div className='w-3 h-3 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-100 to-blue-700' />
                    <h2
                        className='block p-2 text-xl font-medium tracking-tighter text-blue-700 dark:text-blue-200 lg:text-x lg:mr-8'
                    >
                        {t("footer_title")}
                    </h2>
                </div>
                <p className='inline-flex text-blue-700 dark:text-blue-200 px-2 text-xs sm:text-base '>
                    {t("footer_main-title")}
                    <FontAwesomeIcon className='mx-1 mt-0 sm:mt-1' icon={faHeart} />
                    {t("footer_main-subtitle")}
                </p>
                <div className='footer_box'>
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