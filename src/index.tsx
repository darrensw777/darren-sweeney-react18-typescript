import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/';
import { I18nContext, i18n } from 'utils/context';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
    <BrowserRouter basename="">
        <I18nContext.Provider value={i18n}>
            <Routes />
        </I18nContext.Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
