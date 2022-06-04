import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomePageBlock } from 'components';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'components/HomePageBlock',
  component: HomePageBlock,
} as ComponentMeta<typeof HomePageBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HomePageBlock> = (args) => <MemoryRouter><div className="home-group-container"><HomePageBlock {...args} /></div></MemoryRouter>;

export const Primary = Template.bind({});

Primary.args = {
  /*👇 The args you need here will depend on your component */
  link: '/',
  homeImagePath: '/img/gallery/darren.webp',
  iconClass: 'FaCode',
  title: 'Title',
  backgroundColor: 'red'
};