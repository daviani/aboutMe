import React from 'react'

import {SwitchTheme} from './components/switchTheme'

function App() {


    return (
        <>
            <header className='flex flex-col h-full bg-primary-background'>
                <div className='mt-2 text-right'>
                    <SwitchTheme />
                </div>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </>

    );
}

export default App;
