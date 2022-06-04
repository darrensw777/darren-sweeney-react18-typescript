import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CvViewer } from 'modules';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'modules/CvViewer',
    component: CvViewer,
} as ComponentMeta<typeof CvViewer>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CvViewer> = () => <MemoryRouter><CvViewer /></MemoryRouter>;

export const Viewer = Template.bind({});
