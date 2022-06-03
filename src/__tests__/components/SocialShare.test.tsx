import { SocialShare } from 'components';
import testSetUp from 'utils/testSetUp';

describe('SocialShare component', () => {
    let asFragment: any, container: any;
    beforeEach(() => {
        ({ asFragment, container } = testSetUp({
            Component: <SocialShare />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('social__outer');
        expect(blocks.length).toBe(1);
    });
});
