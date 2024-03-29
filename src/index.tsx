/* istanbul ignore file */
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/';
import GlobalStyle from 'utils/styling/GlobalStyle';
import FontStyles from 'utils/styling/FontStyles';

import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
    <BrowserRouter basename="">
        <GlobalStyle />
        <FontStyles />
        <Routes />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
