import styled from 'styled-components/macro';
import { SITE_MAX_WIDTH } from 'utils/styling/variables';

export const ContainerWrapper = styled.div`
    .page-wrapper {
        min-height: 80vh;
        .inner-content {
            position: relative;
            max-width: ${SITE_MAX_WIDTH};
            margin: auto;
        }
    }
`;
