import classNames from 'classnames';
import { ButtonWrapper } from 'formElements/formElementsStyles'
import { ReactElement } from 'react';

const Button: React.FunctionComponent<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
        id?: string,
        type: string,
        disabled?: boolean,
        primary?: boolean,
        label: string,
    }
> = ({ id, type = 'submit', disabled = false, primary = true, label, ...props }): ReactElement => {
    const buttonClasses = classNames('btn', 'btn-primary', !primary && 'hollow');
    return (
        <ButtonWrapper>
            <button {...props} id="contactFormSubmit" type={type} disabled={disabled} className={buttonClasses} aria-label={label}>
                {label}
            </button>
        </ButtonWrapper>
    );
};

export default Button;
