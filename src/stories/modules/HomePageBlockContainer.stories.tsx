import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePageBlockContainer } from 'modules';
import navLinksAndStyles from "utils/navLinksAndStyles";

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'modules/HomePageBlockContainer',
    component: HomePageBlockContainer,
} as ComponentMeta<typeof HomePageBlockContainer>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HomePageBlockContainer> = (args) => <MemoryRouter><HomePageBlockContainer {...args} /></MemoryRouter>;

export const Blocks = Template.bind({});

Blocks.args = {
    /*👇 The args you need here will depend on your component */
    navLinksAndStyles
};
