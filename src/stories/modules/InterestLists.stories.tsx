import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ABOUT_COPY } from 'constants/en/containers/about';
import { InterestLists } from 'modules';

const { interests } = ABOUT_COPY.aboutMe

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'modules/InterestLists',
    component: InterestLists,
} as ComponentMeta<typeof InterestLists>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InterestLists> = (args) => <div className="about-me"><InterestLists {...args} /></div>;

export const Block = Template.bind({});

Block.args = {
    /*👇 The args you need here will depend on your component */
    interests
};