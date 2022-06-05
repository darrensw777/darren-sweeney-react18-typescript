import styled from 'styled-components/macro';
import { FONT_SIZE_XL, FONT_SIZE_TITLE } from 'utils/styling/typography';
import { LIGHT_GREY, BORDER_GREY, WHITE, PRIMARY_GREY } from 'utils/styling/colors';
import {
    MarginBottom,
    RegularFont,
    Padding,
    HeaderFont,
    BodyCopySmall,
    BodyCopy,
    PaddingTop,
    MarginRight,
    BorderRadius,
} from 'utils/styling/mixins';
import { INPUT_MAX_WIDTH, HEADER_HEIGHT, MARGIN, MARGIN_SMALL, SITE_MAX_WIDTH } from 'utils/styling/variables';

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

export const HomePageBlockContainerWrapper = styled.div`
    .home-group-container {
        display: flex;
        overflow: hidden;
        ${MarginBottom};
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const ContactFormikWrapper = styled.section`
    .form-wrapper {
        ${Padding}
        padding-top: 0;

        .message-send-status {
            font-size: ${FONT_SIZE_XL};
            ${HeaderFont}
            background: ${LIGHT_GREY};
            text-align: center;
            ${Padding}
        }

        .helper {
            ${BodyCopySmall}
        }

        .buttons {
            width: 100%;
            max-width: calc(${INPUT_MAX_WIDTH} + 12px);
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const FooterWrapper = styled.footer`
    .footer {
        border-top: 1px solid ${BORDER_GREY};

        .inner-content {
            display: flex;
            justify-content: center;
            ${PaddingTop}

            .copyright {
                ${RegularFont}
            }
        }
    }
`;

export const HeaderWrapper = styled.header`
    .header {
        background: ${WHITE};
        width: 100%;
        position: relative;
        ${MarginBottom}
        z-index: 2;

        @media (min-width: 768px) {
            position: relative;

            & + div {
                padding-top: 0;
            }
        }

        .header__wrapper {
            .inner-content {
                max-width: ${SITE_MAX_WIDTH};
                margin: auto;
                display: flex;
                height: ${HEADER_HEIGHT};

                @media (min-width: 768px) {
                    justify-content: space-between;
                }

                justify-content: center;
                align-items: center;

                ul,
                ul > li,
                .logo {
                    display: inline-block;
                }

                .logo {
                    margin: ${MARGIN} 0;
                    max-width: 160px;
                }

                .name-logo {
                    width: 100%;
                    text-align: center;
                    text-decoration: none;
                    ${HeaderFont}
                    font-size: 36px;
                    color: ${PRIMARY_GREY};

                    @media (min-width: 768px) {
                        text-align: left;
                    }

                    @media (max-width: 526px) {
                        text-align: right;
                    }
                }

                ul {
                    display: none;

                    @media (min-width: 768px) {
                        display: inline-flex;
                        height: ${HEADER_HEIGHT};
                    }

                    list-style: none;
                    margin-bottom: 0;

                    & > li {
                        ${MarginRight}

                        a {
                            ${RegularFont}
                            height: ${HEADER_HEIGHT};
                            display: flex;
                            align-items: center;
                            &[aria-current='true'],
                            &:hover {
                                background-image: linear-gradient(0deg, #333, #333);
                                background-clip: content-box;
                                background-size: 1px 4px;
                                background-position: bottom;
                                background-repeat: repeat-x;
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const ImagesGalleryWrapper = styled.section`
    .images-gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .image-gallery {
            width: 100%;
            ${MarginBottom}
            @media screen and (min-width: 768px) {
                width: calc(50% - 20px);
            }
        }
    }
`;

export const AboutMeBlockWrapper = styled.section`
    .about-me {
        .profile-image {
            display: flex;
            justify-content: center;

            img {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
            }
        }
    }
`;

export const InterestListsWrapper = styled.section`
    .question-container {
        display: flex;
        ${BodyCopy}
        border-top: 1px solid ${BORDER_GREY};

        &__question {
            ${PaddingTop}
            width: 100%;
            max-width: 140px;
            ${MarginBottom}
        }

        &__answers {
            //${PaddingTop}

            ul {
                list-style-type: none;
                padding-left: 0;

                li {
                    line-height: 22px;
                    &:before {
                        content: '•    ';
                        color: ${PRIMARY_GREY};
                        font-size: 18px;
                        margin-left: 8px;
                    }
                }
            }

            @media screen and (min-width: 768px) {
                ul > li {
                    display: inline-block;
                    &:before {
                        content: '•    ';
                        color: ${PRIMARY_GREY};
                        font-size: 18px;
                    }
                }

                ul li:first-of-type:before {
                    content: '';
                }
            }
        }
    }
`;

export const PageHeaderWrapper = styled.section`
    .page-header {
        .title,
        .sub-title {
            display: flex;
            ${Padding}
            ${MarginBottom}
        }
        .title {
            border-top: 4px solid ${BORDER_GREY};
            border-bottom: 4px solid ${BORDER_GREY};
            ${BorderRadius}
            justify-content: center;
        }
        .sub-title {
            border-left: 8px solid ${BORDER_GREY};
            ${RegularFont}
            line-height: 30px;
            font-size: ${FONT_SIZE_TITLE};
        }
    }
`;

export const SoundCloudPlayerWrapper = styled.section`
    .soundcloud-player {
        ${MarginBottom}
        iframe {
            ${MarginBottom}
        }
    }
`;
