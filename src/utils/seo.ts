import { PageObject } from 'utils/interfaces'

/**
 * Doesn't need slash on canonicals
 */

const meta: Record<string, any> = {
    home: <PageObject> {
        docTitle: 'Darren Sweeney',
        canonical: '',
        description: 'Father, husband, web developer, singer.',
    },
    about: <PageObject> {
        docTitle: 'About',
        canonical: 'about',
        description: 'About Darren',
    },
    work: <PageObject> {
        docTitle: 'Work',
        canonical: 'work',
        description: 'My work',
    },
    music: <PageObject> {
        docTitle: 'Music',
        canonical: 'music',
        description: 'Music',
    },
    gallery: <PageObject> {
        docTitle: 'Gallery',
        canonical: 'gallery',
        description: 'Images of Darren',
    },
    contact: <PageObject> {
        docTitle: 'Contact',
        canonical: 'contact',
        description: 'How to contact Darren',
    },
};

export default meta;
