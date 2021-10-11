import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React from "react";
import {useTranslation} from "react-i18next";

const SwitchLang = () => {
    const {i18n} = useTranslation();
    const changeLanguage = (language: any) => {
        i18n.changeLanguage(language);
    };
    return (
        <>
            <div className='outline-none focus:outline-none px-4 py-2 text-primary dropdown'>
                <button type='button' aria-haspopup='true' aria-expanded='true'>
                    <FontAwesomeIcon icon={faGlobe} />
                </button>
                <div
                    className='opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95'
                >
                    <div
                        className='absolute right-0 mt-2 origin-top-right bg-secondary rounded-md shadow-lg outline-none'
                        role='menu'
                    >
                        <div className='px-4 py-3 text-primary'>

                            <button
                                className={(i18n.language === 'fr' ? 'text-base font-semibold cursor-not-allowed' : 'text-sm')}
                                onClick={() => changeLanguage("fr")}
                                disabled={i18n.language === 'fr'}
                            >
                                Français
                            </button>

                            <button
                                className={(i18n.language === 'en' ? 'text-base font-semibold cursor-not-allowed' : 'text-sm')}
                                onClick={() => changeLanguage("en")}
                                disabled={i18n.language === 'en'}
                            >
                                English
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwitchLang