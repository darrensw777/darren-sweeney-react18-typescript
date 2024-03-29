import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'atoms';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'form elements/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*👇 The args you need here will depend on your component */
  type: 'submit',
  label: 'Click me'
};

export const Secondary = Template.bind({});

Secondary.args = {
  /*👇 The args you need here will depend on your component */
  type: 'submit',
  label: 'Click me',
  primary: false
};