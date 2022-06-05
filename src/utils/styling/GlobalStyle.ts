import { createGlobalStyle } from 'styled-components';
import { PRIMARY_GREY, WHITE } from './colors';
import { BodyCopy, Padding } from './mixins';

const GlobalStyle = createGlobalStyle`
    body {
        color: ${PRIMARY_GREY};
        overflow-y: scroll;
        margin: 0;

        &.side-menu-open {
            overflow: hidden;
            /* This to stop page move as scroll goes away */
            margin-right: 16px;

            .main-content-container {
                filter: grayscale(100%) blur(10px);
                transition: 0.5s filter linear,
                    1s -webkit-filter linear;
            }
        }

        .main-content-container {
            max-width: 100%;
            background: ${WHITE};
            ${Padding}

            p {
                ${BodyCopy}
                line-height: 22px;
            }
        }

        h1, h2, h3, h4 {
            font-family: "Roboto Slab", serif;
            font-weight: 700;
            letter-spacing: 1px;
        }

        h1 {
            font-size: 48px;
            line-height: 48px;
        }

        h2 {
            font-size: 36px;
            line-height: 36px;
        }

        h3 {
            font-size: 24px;
            line-height: 24px;
        }

        h4 {
            font-size: 16px;
            line-height: 16px;
        }
    }
`;

export default GlobalStyle;
