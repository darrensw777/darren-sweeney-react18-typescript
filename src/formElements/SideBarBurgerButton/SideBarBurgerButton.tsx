import { ReactNode } from 'react';

const SideBarBurgerButton: React.FunctionComponent<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
        burgerClasses: string,
        setMenuOpen: Function,
        menuOpen: boolean,
        children: ReactNode,
    }
> = ({ burgerClasses, setMenuOpen, menuOpen, children, ...props }) => (
    <button
        {...props}
        id="burger-menu"
        className={burgerClasses}
        onClick={() => {
            setMenuOpen(!menuOpen);
        }}
    >
        {children}
    </button>
);

export default SideBarBurgerButton;
