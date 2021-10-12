import React from 'react'

import Header from "./components/header";
import Footer from "./components/footer";

import {sections} from './data/data';
import Card from "./components/Card";

function App() {
    // @ts-ignore
    // @ts-ignore
    return (
        < div className='bg-negative '>
            <div className='bg-primary-background shadow-xl'>
                <Header />
            </div>
            <div className=' p-4 w-1/2 mx-auto  '>
                {sections.map((section) =>
                    <>
                        <p className='text-2xl font-extrabold text-center text-primary'>{section.title}</p>
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
                    </>,
                )}
            </div>
            <div className='bg-primary-background w-full '>
                <Footer />
            </div>
        </div>

    );
}

export default App;
