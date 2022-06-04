import { ComponentStory, ComponentMeta } from '@storybook/react';
import galleryImages from 'utils/galleryImages';
import { ImagesGallery } from 'modules';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'modules/ImagesGallery',
    component: ImagesGallery,
} as ComponentMeta<typeof ImagesGallery>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ImagesGallery> = (args) => <ImagesGallery {...args} />;

export const Block = Template.bind({});

Block.args = {
    /*👇 The args you need here will depend on your component */
    galleryImages
};