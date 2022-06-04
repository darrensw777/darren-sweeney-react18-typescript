import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CONTACT_COPY } from 'constants/en/containers/contact';
import { ContactFormik } from 'modules';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'modules/ContactFormik',
    component: ContactFormik,
} as ComponentMeta<typeof ContactFormik>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContactFormik> = (args) => <ContactFormik {...args} />;

export const Formik = Template.bind({});

Formik.args = {
    /*👇 The args you need here will depend on your component */
    CONTACT_COPY
};
