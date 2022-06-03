import { ReactNode } from 'react';

const SideBarButtonWrapper: React.FunctionComponent<
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
            console.log('🚀 ~ file: SideBarMenu.tsx ~ line 50 ~ SideBarMenu ~ menuOpen', menuOpen);
        }}
    >
        {children}
    </button>
);

export default SideBarButtonWrapper;
