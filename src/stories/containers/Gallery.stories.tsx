import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Gallery } from 'containers';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'containers/Gallery',
    component: Gallery,
} as ComponentMeta<typeof Gallery>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Gallery> = () => <MemoryRouter><Gallery /></MemoryRouter>;

export const Page = Template.bind({});