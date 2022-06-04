import { css } from 'styled-components';

const PADDING = '20px';
const MARGIN = '20px';

export const Padding = () => css`
    padding: ${PADDING};
`;

export const PaddingLeft = () => css`
    padding-left: ${PADDING};
`;

export const PaddingRight = () => css`
    padding-right: ${PADDING};
`;

export const PaddingTop = () => css`
    padding-top: ${PADDING};
`;

export const PaddingBottom = () => css`
    padding-bottom: ${PADDING};
`;

export const Margin = () => css`
    margin: ${MARGIN};
`;

export const MarginLeft = () => css`
    margin-left: ${MARGIN};
`;

export const MarginRight = () => css`
    margin-right: ${MARGIN};
`;

export const MarginTop = () => css`
    margin-top: ${MARGIN};
`;

export const MarginBottom = () => css`
    margin-bottom: ${MARGIN};
`;

export const HeaderFont = () => css`
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-rendering: optimizeLegibility;
`;

export const RegularFont = () => css`
    font-family: 'Dosis', serif;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-rendering: optimizeLegibility;
    line-height: 24px;
`;
