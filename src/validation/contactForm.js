import * as Yup from "yup";

const contactFormValidation = ({ error }) => {
    const { nameTooShort, nameTooLong, nameRequired, emailInvalid, emailRequired, messageRequired } = error;
    return Yup.object().shape({
        name: Yup.string().min(2, nameTooShort).max(50, nameTooLong).required(nameRequired),
        email: Yup.string().email(emailInvalid).required(emailRequired),
        message: Yup.string().required(messageRequired),
    });
};

export default contactFormValidation;
