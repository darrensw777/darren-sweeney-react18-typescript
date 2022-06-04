import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SideBarMenuLinks } from 'components';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/SideBarMenuLinks',
    component: SideBarMenuLinks,
} as ComponentMeta<typeof SideBarMenuLinks>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SideBarMenuLinks> = (args) => <MemoryRouter><div className="nav-block-container"><SideBarMenuLinks {...args} /></div></MemoryRouter>;

export const Primary = Template.bind({});

Primary.args = {
    navLinksAndStyles: [
        {
            link: "/",
            title: "Home",
            id: "Home",
            iconClass: "FaHome",
            backgroundColor: "#2C1320",
            homeImagePath: "",
            navBlock: false,
        },
        {
            link: "/about",
            title: "About me",
            id: "About",
            iconClass: "FaInfoCircle",
            backgroundColor: "#1abc9c",
            homeImagePath: "/img/gallery/darren.webp",
            navBlock: true,
        },
        {
            link: "/work",
            title: "Work/CV",
            id: "Work",
            iconClass: "FaCode",
            backgroundColor: "#3498db",
            homeImagePath: "/img/gallery/zt4.webp",
            navBlock: true,
        }
    ]
};