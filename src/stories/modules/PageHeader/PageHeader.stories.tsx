import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHeader } from 'modules';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'modules/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const WithSubtitle = Template.bind({});

WithSubtitle.args = {
  /*👇 The args you need here will depend on your component */
  pageTitle: {
        title: 'title',
        subTitle: 'subTitle'
    }
};

export const NoSubtitle = Template.bind({});

NoSubtitle.args = {
  /*👇 The args you need here will depend on your component */
  pageTitle: {
        title: 'title'
    }
};