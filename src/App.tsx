import React from 'react'

import Header from "./components/header";
import Footer from "./components/footer";

import {sections} from './data/data';
import Card from "./components/Card";

function App() {
    // @ts-ignore
    // @ts-ignore
    return (
        < div className='bg-blue-100 dark:bg-blue-700 '>
            <div className='bg-blue-200 dark:bg-blue-800 shadow-xl'>
                <Header />
            </div>
            <div className=' p-4 w-1/2 mx-auto  '>
                {sections.map((section) =>
                    <div key={section.title} >
                        <p className='text-3xl text-blue-700 dark:text-blue-200 font-extrabold text-center mt-2.5'>
                            {section.title}
                        </p>
                        {section.items.map((item) =>
                            <div key={item.id}
                            >
                                <Card url={item.url}
                                      img={item.img}
                                      title={item.title}
                                      subTitle={item.subTitle!}
                                />
                            </div>,
                        )}
                    </div>,
                )}
            </div>
            <div className='bg-blue-200 dark:bg-blue-800 w-full '>
                <Footer />
            </div>
        </div>

    );
}

export default App;
