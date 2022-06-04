import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Formik } from 'formik';

import { InputField } from 'formElements';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'form elements/InputField',
    component: InputField,
} as ComponentMeta<typeof InputField>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InputField> = (args) => <Formik
    onSubmit={() => { }}
    initialValues={{ name: '' }}
    validate={(values) => {
        let errors: { name?: string } = {};

        if (!values?.name) {
            errors.name = 'Required.';
        }

        return errors;
    }}
>
    {() => {
        return (
            <div className="form-wrapper">
                <form className="form" name="contactForm">
                    <InputField {...args} />
                </form>
            </div>
        );
    }}
</Formik>;

export const Primary = Template.bind({});

Primary.args = {
    /*👇 The args you need here will depend on your component */
    fieldName: 'submit',
    className: 'class',
    id: '123'
};

// export const Secondary = Template.bind({});

// Secondary.args = {
//   /*👇 The args you need here will depend on your component */
//   type:'submit',
//   label: 'Click me',
//   primary: false
// };