// @ts-nocheck

import { useState, useContext } from "react";
import { Formik, Field } from "formik";
import contactFormValidation from "validation/contactForm";
import { I18nContext } from "utils/context";

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
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

const ContactFormik = () => {
    const [messageSendStatus, setMessageSendStatus] = useState("");

    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived;
    const { CONTACT_COPY } = require(`constants/${language}/containers/contact.js`);
    const { fieldLabels, formSubmit, validationErrorMessages, misc } = CONTACT_COPY;
    const { name, email, message } = fieldLabels;
    const { formSuccess, formError } = formSubmit;
    const { allFieldsRequired } = misc;

    return (
        <div className="form-wrapper">
            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={contactFormValidation({ error: validationErrorMessages })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    fetch("/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: encode({
                            "form-name": "contactForm",
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
                render={({ touched, errors, isSubmitting, handleSubmit, handleReset, values }) => {
                    console.log("🚀 ~ file: ContactFormik.tsx ~ line 55 ~ ContactFormik ~ values", values);
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
                                <div className="field">
                                    <label htmlFor="name" className="label">
                                        {name}
                                    </label>
                                    <Field className="input-text" type="text" name="name" />
                                    {touched.name && errors.name && <p className="danger">{errors.name}</p>}
                                </div>
                                <div className="field">
                                    <label htmlFor="email" className="label">
                                        {email}
                                    </label>
                                    <Field className="input-text" type="text" name="email" />
                                    {touched.email && errors.email && <p className="danger">{errors.email}</p>}
                                </div>
                                <div className="field">
                                    <label htmlFor="message" className="label">
                                        {message}
                                    </label>
                                    <Field className="input-textarea" name="message" component="textarea" rows="6" />
                                    {touched.message && errors.message && <p className="danger">{errors.message}</p>}
                                </div>
                                <div className="buttons">
                                    <input
                                        id="contactFormSubmit"
                                        name="submit"
                                        type="submit"
                                        disabled={isSubmitting}
                                        value="Send Message"
                                        className="btn btn-primary"
                                    />
                                    <input type="reset" value="Clear" className="btn hollow" />
                                </div>
                            </form>
                        </>
                    );
                }}
            />
        </div>
    );
};

export default ContactFormik;
