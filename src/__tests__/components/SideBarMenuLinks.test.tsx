import { SideBarMenuLinks } from 'components';
import testSetUp from 'utils/testSetUp';

describe('SideBarMenuLinks component', () => {
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

    let asFragment: any, container: any, getAllByRole: any;
    beforeEach(() => {
        ({ asFragment, container, getAllByRole } = testSetUp({
            Component: <SideBarMenuLinks setMenuOpen={() => {}} navLinksAndStyles={navLinksAndStyles} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('side-nav-block');
        expect(blocks.length).toBe(2);
    });

    test('renders the correct name', () => {
        const anchorElements = getAllByRole('navigation');
        expect(anchorElements[0]).toHaveTextContent(navLinksAndStyles[0].title);
        expect(anchorElements[0]).toHaveAttribute('href', navLinksAndStyles[0].link);
    });
});
