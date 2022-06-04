import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CvPagination } from 'components';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/CvPagination',
    component: CvPagination,
} as ComponentMeta<typeof CvPagination>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CvPagination> = (args) => <MemoryRouter><div className="nav-block-container"><CvPagination {...args} /></div></MemoryRouter>;

export const Primary = Template.bind({});

Primary.args = {
    cvPages: ['dsCV1.webp', 'dsCV2.webp', 'dsCV3.webp', 'dsCV4.webp'],
    CV_VIEWER: {
        PAGE: 'Page',
        OF: 'of',
        NEXT: 'Next',
        PREVIOUS: 'Previous'
    },
    setPageState: () => { },
    pageState: {
        pageNumber: 1
    }
};