import styled from 'styled-components/macro';
import { fontSizes } from 'utils/styling/typography';
import { MarginBottom, RegularFont } from 'utils/styling/mixins';

const BREAKPOINT = '676px';

export const CvViewerWrapper = styled.div`
    .cv-viewer {
        .links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            @media (min-width: ${BREAKPOINT}) {
                flex-wrap: nowrap;
                justify-content: space-evenly;
            }

            a {
                display: flex;
                flex-basis: 100%;
                justify-content: center;

                @media (min-width: ${BREAKPOINT}) {
                    flex-basis: unset;
                    justify-content: unset;
                }
                // mixins
                ${RegularFont}
                ${MarginBottom};
            }
        }

        .cv-page-container {
            img {
                width: 100%;
            }
        }
    }
`;
