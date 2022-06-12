import { screen, render, fireEvent } from '@testing-library/react';
import InputField from 'atoms/InputField';
import { Formik } from 'formik';

test('should have validation error given input field is touched and error exists on form', async () => {
    const fieldName = 'name';
    const labelName = 'Name:';
    render(
        <Formik
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
                    <>
                        <form className="form" name="contactForm">
                            <InputField fieldName={labelName} className="input-text" id={fieldName} />
                        </form>
                    </>
                );
            }}
        </Formik>
    );

    const input = screen.getByLabelText(labelName);

    // Call blur without inputting anything which should trigger a validation error
    fireEvent.blur(input);

    const validationErrors = await screen.findByTestId(`errors-${fieldName}`);

    expect(validationErrors.innerHTML).toBe('Required.');
});
