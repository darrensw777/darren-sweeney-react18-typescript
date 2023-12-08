/* istanbul ignore file */
import { ReactNode } from 'react';

export interface AboutGreetingTypes {
    morning: number;
    evening: string;
    afternoon: number;
}

interface Interest {
    question: string;
    answers: string[];
}
export interface InterestsProps {
    interests: Interest[];
}

interface CopyProps {
    general: string[];
    greetings: object;
    interests: Interest[];
}

export interface CopyPropsParent {
    copy: CopyProps;
}

export interface ChildrenProps {
    children: ReactNode;
}

export interface NavLinkProps {
    link: string;
    title: string;
    id: string;
    iconClass: string;
    backgroundColor: string;
    homeImagePath?: string;
    navBlock: boolean;
}
export interface SideBarMenuLinksProps {
    setMenuOpen: Function;
    navLinksAndStyles: NavLinkProps[];
}

export interface SideBarMenuProps {
    navLinksAndStyles: NavLinkProps[];
}

interface GreetingCopy {
    morning?: string;
    evening?: string;
    afternoon?: string;
}
export interface GreetingCopyProps {
    copy: GreetingCopy;
    testTimeInHours?: number | null;
}

export interface PageObject {
    docTitle: string;
    canonical: string;
    description: string;
}

/**
 * CvPagination component
 */
export interface CvPaginationProps {
    cvPages: string[];
    CV_VIEWER: {
        PAGE: string,
        OF: string,
        NEXT: string,
        PREVIOUS: string,
    };
    setPageState: Function;
    pageState: State;
    className?: string;
}

export interface State {
    pageNumber: number;
}

export interface Action {
    type: string;
}

/**
 * HomePageBlockContainer
 */

interface HomePageBlockProps {
    link: string;
    title: string;
    id: string;
    iconClass: string;
    backgroundColor: string;
    homeImagePath: string;
    navBlock: boolean;
}

export interface HomePageBlockContainerProps {
    navLinksAndStyles: HomePageBlockProps[];
}

/**
 * PageHeader
 */

interface PageTitleProps {
    title: string;
    subTitle?: string;
}
export interface PageHeaderProps {
    pageTitle: PageTitleProps;
}

/**
 * Homepage block
 */

export interface HomePageBlockP {
    link: string;
    homeImagePath: string;
    iconClass: string;
    title: string;
    backgroundColor: string;
}

/**
 * SideNavBlock
 */

export interface SideNavBlockProps {
    link: string;
    iconClass: string;
    title: string;
    backgroundColor: string;
    onClick: () => void;
}
