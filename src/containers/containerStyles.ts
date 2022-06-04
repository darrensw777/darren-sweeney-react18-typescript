import styled from 'styled-components/macro';
import variables from 'utils/styling/variables';

const { SITE_MAX_WIDTH } = variables;

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
