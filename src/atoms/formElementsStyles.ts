import styled from 'styled-components/macro';
import { MarginBottom, BorderRadius, BodyCopy } from 'utils/styling/mixins';
import { CTA_BUTTON_HEIGHT, INPUT_FIELD_HEIGHT, INPUT_MAX_WIDTH } from 'utils/styling/variables';
import { PRIMARY_COLOR, PRIMARY_GREY, WHITE } from 'utils/styling/colors';

export const SideBarBurgerButtonWrapper = styled.div`
    #burger-menu {
        @media (min-width: 768px) {
            display: none;
        }

        width: 40px;
        height: 32px;
        position: absolute;
        top: 44px;
        left: 20px;
        transform: rotate(0deg);
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        z-index: 300;
        border: none;
        background: ${WHITE};

        &.open {
            position: fixed;

            span {
                background: ${PRIMARY_COLOR};
            }
        }

        span {
            display: block;
            position: absolute;
            height: 5px;
            width: 100%;
            background: ${PRIMARY_GREY};
            ${BorderRadius}
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: 0.25s ease-in-out;
        }
    }

    #burger-menu span:nth-child(1) {
        top: 0px;
    }

    #burger-menu span:nth-child(2),
    #burger-menu span:nth-child(3) {
        top: 12px;
    }

    #burger-menu span:nth-child(4) {
        top: 24px;
    }

    #burger-menu.open span:nth-child(1) {
        top: 12px;
        width: 0%;
        left: 50%;
    }

    #burger-menu.open span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    #burger-menu.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    #burger-menu.open span:nth-child(4) {
        top: 12px;
        width: 0%;
        left: 50%;
    }
`;

export const ButtonWrapper = styled.div`
    .btn {
        height: ${CTA_BUTTON_HEIGHT};
        border: 1px solid ${PRIMARY_GREY};
        cursor: pointer;

        &.btn-primary {
            background: ${PRIMARY_GREY};
            color: ${WHITE};
        }

        &.hollow {
            background: transparent;
            color: ${PRIMARY_GREY};
        }
    }
`;

export const InputFieldWrapper = styled.div`
    .field {
        display: flex;
        flex-wrap: wrap;
        ${MarginBottom}
        ${BodyCopy}

            label {
            width: 100%;
            padding-bottom: 6px;
            ${BodyCopy}
        }

        .input-text {
            height: ${INPUT_FIELD_HEIGHT};
            width: 100%;
            max-width: ${INPUT_MAX_WIDTH};
            padding-left: 8px;
            ${BodyCopy}
        }

        .input-textarea {
            width: 100%;
            max-width: ${INPUT_MAX_WIDTH};
            padding-left: 8px;
            ${BodyCopy}
        }

        .danger {
            width: 100%;
            color: red;
            margin-bottom: 0;
            margin-top: 10px;
        }
    }
`;
