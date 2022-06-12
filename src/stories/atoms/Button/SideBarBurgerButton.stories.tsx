import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SideBarBurgerButton } from 'atoms';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'form elements/SideBarBurgerButton',
    component: SideBarBurgerButton,
} as ComponentMeta<typeof SideBarBurgerButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SideBarBurgerButton> = (args) =>
    <div className="sidebar-container"><SideBarBurgerButton {...args}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </SideBarBurgerButton></div>;

export const MenuClosed = Template.bind({});

MenuClosed.args = {
    /*👇 The args you need here will depend on your component */
    burgerClasses: 'btn close-menu-icon',
    setMenuOpen: () => { },
    menuOpen: false,
};

export const MenuOpen = Template.bind({});

MenuOpen.args = {
    /*👇 The args you need here will depend on your component */
    burgerClasses: 'btn close-menu-icon open',
    setMenuOpen: () => { },
    menuOpen: true,
};
