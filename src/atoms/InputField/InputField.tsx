import { Field, FormikErrors, FormikTouched, useFormikContext } from 'formik';
import { InputFieldWrapper } from 'atoms/formElementsStyles'
import { ReactElement } from 'react';

interface InputFieldProps {
    fieldName: string;
    className: string;
    id: string;
    component?: string;
    rows?: string;
}

type ErrorMessageProps = string | FormikErrors<any> | string[] | FormikErrors<any>[] | undefined;

const InputField = ({ fieldName, className, id, component = '', rows = '' }: InputFieldProps): ReactElement => {
    const { touched, errors }: { touched: FormikTouched<any>, errors: FormikErrors<any> } = useFormikContext();
    const errorMessage: ErrorMessageProps = errors[id];
    return (
        <InputFieldWrapper>
            <div className="field">
                <label htmlFor="name" className="label">
                    {fieldName}
                </label>
                <Field className={className} type="text" name={id} id={id} component={component} rows={rows} />
                {touched[id] && errors[id] && (
                    <div className="danger" data-testid={`errors-${id}`}>
                        {errorMessage as string}
                    </div>
                )}
            </div>
        </InputFieldWrapper>
    );
};

export default InputField;
