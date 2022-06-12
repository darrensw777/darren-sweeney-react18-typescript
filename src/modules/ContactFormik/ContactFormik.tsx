// @ts-nocheck
import { ReactElement, useState } from 'react';
import { Formik } from 'formik';
import contactFormValidation from 'validation/contactForm';
import { InputField, Button } from 'atoms';
import { ContactFormikWrapper } from 'modules/moduleStyles'

interface MessageProps {
    name: string;
    email: string;
    message: string;
    [key: string]: any;
}

interface EncodeProps {
    data: MessageProps;
}

const encode = (data: EncodeProps) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const ContactFormik = ({ CONTACT_COPY }): ReactElement => {
    // prettier-ignore
    const [messageSendStatus, setMessageSendStatus] = useState<string | null>(null);

    const { fieldLabels, formSubmit, validationErrorMessages, misc } = CONTACT_COPY;
    const { name, email, message } = fieldLabels;
    const { formSuccess, formError } = formSubmit;
    const { allFieldsRequired } = misc;

    return (
        <ContactFormikWrapper>
            <div className="form-wrapper">
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validationSchema={contactFormValidation({ error: validationErrorMessages })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        fetch('/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: encode({
                                'form-name': 'contactForm',
                                ...values,
                            }),
                        })
                            .then(() => {
                                setMessageSendStatus(formSuccess);
                                setSubmitting(false);
                                resetForm();
                            })
                            .catch(() => {
                                setMessageSendStatus(formError);
                                setSubmitting(false);
                            });
                    }}
                >
                    {({ touched, errors, isSubmitting, handleSubmit, handleReset }) => {
                        return (
                            <>
                                {messageSendStatus && <p className="message-send-status">{messageSendStatus}</p>}
                                <form
                                    className="form"
                                    name="contactForm"
                                    onSubmit={handleSubmit}
                                    onReset={handleReset}
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                >
                                    <input name="bot-field" hidden />
                                    <p className="helper">{allFieldsRequired}</p>
                                    <InputField
                                        fieldName={name}
                                        touched={touched}
                                        errors={errors}
                                        className="input-text"
                                        id="name"
                                    />
                                    <InputField
                                        fieldName={email}
                                        touched={touched}
                                        errors={errors}
                                        className="input-text"
                                        id="email"
                                    />
                                    <InputField
                                        fieldName={message}
                                        touched={touched}
                                        errors={errors}
                                        className="input-textarea"
                                        id="message"
                                        component="textarea"
                                        rows="6"
                                    />
                                    <div className="buttons">
                                        <Button
                                            id="contactFormSubmit"
                                            type="submit"
                                            disabled={isSubmitting}
                                            primary={true}
                                            label="Send message"
                                        />
                                        <Button type="reset" primary={false} label="Clear" />
                                    </div>
                                </form>
                            </>
                        );
                    }}
                </Formik>
            </div>
        </ContactFormikWrapper>
    );
};

export default ContactFormik;
