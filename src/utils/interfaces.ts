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
