import { ComponentStory, ComponentMeta } from '@storybook/react';
import soundcloudIds from 'utils/soundCloudIds';
import { SoundCloudPlayer } from 'modules';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'modules/SoundCloudPlayer',
    component: SoundCloudPlayer,
} as ComponentMeta<typeof SoundCloudPlayer>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SoundCloudPlayer> = (args) => <div className="about-me"><SoundCloudPlayer {...args} /></div>;

export const Block = Template.bind({});

Block.args = {
    /*👇 The args you need here will depend on your component */
    soundcloudIds
};