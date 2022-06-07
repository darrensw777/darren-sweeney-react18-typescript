import { ReactElement, ReactNode } from 'react';
import { SideBarBurgerButtonWrapper } from 'formElements/formElementsStyles'

const SideBarBurgerButton: React.FunctionComponent<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
        burgerClasses: string,
        setMenuOpen: Function,
        menuOpen: boolean,
        children: ReactNode,
    }
> = ({ burgerClasses, setMenuOpen, menuOpen, children, ...props }): ReactElement => (
    <SideBarBurgerButtonWrapper>
        <button
            {...props}
            id="burger-menu"
            className={burgerClasses}
            onClick={() => {
                setMenuOpen(!menuOpen);
            }}
            aria-label="Show site menu"
        >
            {children}
        </button>
    </SideBarBurgerButtonWrapper>
);

export default SideBarBurgerButton;
