import classNames from 'classnames';

const Button: React.FunctionComponent<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
        id?: string,
        type: string,
        disabled?: boolean,
        primary?: boolean,
        label: string,
    }
> = ({ id, type = 'submit', disabled = false, primary = true, label, ...props }) => {
    const buttonClasses = classNames('btn', 'btn-primary', !primary && 'hollow');
    return (
        <button {...props} id="contactFormSubmit" type={type} disabled={disabled} className={buttonClasses}>
            {label}
        </button>
    );
};

export default Button;
