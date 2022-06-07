import styled from 'styled-components/macro';
import { FONT_SIZE_XL } from 'utils/styling/typography';
import {
    MarginBottom,
    HeaderFont,
    BorderRadius,
    PaddingRight,
    MarginRight,
    BodyCopy,
    MarginTop,
    Padding,
} from 'utils/styling/mixins';
import { MARGIN, MENU_TRANSITION_SPEED } from 'utils/styling/variables';
import { BORDER_GREY, PRIMARY_COLOR, PRIMARY_GREY, SECONDARY_GREY, WHITE } from 'utils/styling/colors';

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
                font-size: ${FONT_SIZE_XL};
            }
        }
    }
`;

export const HomePageBlockWrapper = styled.div`
    width: 49%;
    @media screen and (max-width: 560px) {
        width: 100%;
    }
    ${MarginBottom}
    ${BorderRadius}
    .homepage-block {
        display: inline-block;
        color: #fff;
        text-align: center;
        position: relative;
        z-index: 2;
        width: 100%;
        transition: all 0.3s ease;

        &:hover {
            -webkit-filter: brightness(0.8);
            filter: brightness(0.8);
        }

        .link {
            cursor: pointer;
            z-index: 2;
            width: 100%;

            .card-image {
                width: 200px;
                height: 200px;
                margin: 0 auto;
                border-radius: 50%;
                overflow: hidden;
                margin-top: 8%;
                margin-bottom: 8%;
                border: 6px solid #fff;

                img {
                    clip-path: circle();
                    width: 100%;
                }
            }

            .link-holder {
                margin-bottom: 8%;
                display: flex;
                align-items: center;
                justify-content: center;
                ${HeaderFont}

                svg {
                    margin-right: 10px;
                }
            }
        }

        a {
            @media screen and (max-width: 768px) {
                font-size: 24px;
            }

            color: #fff;
            font-size: 30px;
            cursor: pointer;
            text-decoration: none;
        }
    }
`;

export const SideBarMenuWrapper = styled.div`
    .sidebar-container {
        .sidebar-menu {
            background: ${WHITE};
            border-radius: 0 0 10px 10px;
            transition: all ${MENU_TRANSITION_SPEED} ease;
            position: absolute;
            top: -1350px;
            left: 0;
            z-index: 200;
            width: 100%;
            max-width: 768px;
            &.open {
                top: 0px;
            }

            border: 1px solid ${BORDER_GREY};
            text-align: center;

            .nav-block-container {
                ${BorderRadius}
                display: flex;
                overflow: hidden;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-evenly;
                ${MarginTop}
            }

            .name-logo {
                text-decoration: none;
                ${HeaderFont}
                font-size: 36px;
                color: ${PRIMARY_GREY};
                ${MarginBottom}
                display: block;
                margin-top: 32px;

                @media (max-width: 526px) {
                    text-align: right;
                    ${PaddingRight}
                    font-size: 30px;
                }
            }

            .close-menu-icon {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            img {
                margin-bottom: 20px;
                width: 80%;
                margin-left: 40px;
            }

            ul.sub-links {
                outline: none;
                list-style: none;
                margin-bottom: 0;
                padding-left: 20px;

                & > li {
                    ${MarginRight}

                    a {
                        ${BodyCopy}
                        padding-left: 16px;
                        display: flex;
                        align-items: center;
                        border-left: 2px solid ${BORDER_GREY};
                        color: ${SECONDARY_GREY};
                        height: 40px;

                        &[aria-current='true'],
                        &:hover {
                            border-left: 2px solid ${PRIMARY_COLOR};
                            text-decoration: none;
                            color: ${PRIMARY_COLOR};
                        }
                    }
                }
            }
        }
    }
`;

export const SideNavBlockWrapper = styled.div`
    flex: 0 1 calc(50% - ${MARGIN});
    .side-nav-block {
        margin: 0 0 ${MARGIN} 0;
        align-items: center;

        a {
            text-decoration: none;

            .link,
            .icon {
                display: flex;
                ${Padding}
                ${HeaderFont}
                    justify-content: center;
                font-size: 22px;
            }

            .link {
                color: ${WHITE};
                font-size: 22px;
            }

            .icon {
                color: ${PRIMARY_GREY};
                font-size: 42px;
            }
        }
    }
`;
