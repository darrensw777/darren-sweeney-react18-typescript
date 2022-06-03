import { SideBarMenu } from 'components';
import testSetUp from 'utils/testSetUp';

describe('SideBarMenu component', () => {
    const navLinksAndStyles = [
        {
            link: '/',
            title: 'Home',
            id: 'Home',
            iconClass: 'fa fa-home',
            backgroundColor: '#2C1320',
            homeImagePath: '',
            navBlock: false,
        },
        {
            link: '/link',
            title: 'link',
            id: 'link',
            iconClass: 'fa fa-link',
            backgroundColor: '#2C1320',
            homeImagePath: '/image/path',
            navBlock: false,
        },
    ];

    let asFragment: any, container: any;
    beforeEach(() => {
        ({ asFragment, container } = testSetUp({ Component: <SideBarMenu navLinksAndStyles={navLinksAndStyles} /> }));
    });

    

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('sidebar-container');
        expect(blocks.length).toBe(1);
    });

    test('renders the links', () => {
        const blocks = container.getElementsByClassName('side-nav-block');
        expect(blocks.length).toBe(2);
    });

    test('renders the burger button', () => {
        const burgerButton = container.querySelector('#burger-menu')! as HTMLButtonElement;
        expect(burgerButton).toBeTruthy();
    });
});
