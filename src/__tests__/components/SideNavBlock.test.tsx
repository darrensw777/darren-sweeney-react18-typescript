import { SideNavBlock } from 'components';
import testSetUp from 'utils/testSetUp';

describe('SideNavBlock component', () => {
    const sideNavBlockProps = {
        link: '/',
        title: 'Home',
        iconClass: 'fa fa-home',
        backgroundColor: '#2C1320',
        onClick: () => {},
    };

    let asFragment: any, container: any;
    beforeEach(() => {
        ({ asFragment, container } = testSetUp({
            Component: <SideNavBlock {...sideNavBlockProps} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('side-nav-block');
        expect(blocks.length).toBe(1);
    });
});
