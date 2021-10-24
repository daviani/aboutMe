import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/main.css';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from './context/themeContext'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider >
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </ThemeProvider>

    </React.StrictMode>,
    document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
