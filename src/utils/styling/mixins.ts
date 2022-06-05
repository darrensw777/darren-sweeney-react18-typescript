import { css } from 'styled-components';
import { FONT_SIZE_REGULAR, FONT_SIZE_SMALL } from 'utils/styling/typography';
import { PADDING, MARGIN, BORDER_RADIUS } from './variables';

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
    font-weight: 400;
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

export const BodyCopy = () => css`
    ${RegularFont};
    font-size: ${FONT_SIZE_REGULAR};
    line-height: 14px;
`;

export const BodyCopySmall = () => css`
    ${RegularFont};
    font-size: ${FONT_SIZE_SMALL};
    line-height: 14px;
`;

export const BorderRadius = () => css`
    border-radius: ${BORDER_RADIUS};
`;
