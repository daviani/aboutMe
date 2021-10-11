import React from 'react'

import Header from "./components/header";
import Footer from "./components/footer";


function App() {
    return (
        <>
            <div className='bg-primary-background shadow-xl'>
                <Header />
            </div>
            <div className=''>
                aaa
            </div>
            <div className='bg-primary-background w-full fixed bottom-0 '>
                <Footer />
            </div>
        </>

    );
}

export default App;
