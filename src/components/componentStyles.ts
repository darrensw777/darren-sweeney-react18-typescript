import styled from 'styled-components/macro';
import { fontSizes } from 'utils/styling/typography';
import { MarginBottom, HeaderFont } from 'utils/styling/mixins';

export const CvPaginationWrapper = styled.div`
    .pagination {
        display: flex;
        flex-wrap: wrap;
        ${MarginBottom};

        p,
        .buttons {
            display: flex;
            flex-basis: 100%;
            justify-content: center;

            button {
                background: transparent;
                ${HeaderFont};
                border: none;
                cursor: pointer;
                font-size: ${fontSizes.XL};
            }
        }
    }
`;
