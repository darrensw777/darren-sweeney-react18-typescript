import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SideNavBlock } from 'components';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/SideNavBlock',
    component: SideNavBlock,
} as ComponentMeta<typeof SideNavBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SideNavBlock> = (args) => <MemoryRouter><div className="nav-block-container"><SideNavBlock {...args} /></div></MemoryRouter>;

export const Primary = Template.bind({});

Primary.args = {
    link: "/",
    title: "Home",
    iconClass: "FaHome",
    backgroundColor: "#2C1320",
    onClick: () => { },
};