import { AboutMeBlock } from 'modules';
import testSetUp from 'utils/testSetUp';

describe('AboutMeBlock container', () => {
    const copyBlock = {
        general: ['hello', 'world'],
        greetings: {},
        interests: [
            {
                question: 'string',
                answers: ['answer1'],
            },
        ],
    };

    let asFragment: any, container: any, getByRole: any;
    beforeEach(() => {
        ({ asFragment, container, getByRole } = testSetUp({
            Component: <AboutMeBlock copy={copyBlock} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('about-me');
        expect(blocks.length).toBe(1);
    });

    test('renders the section title', () => {
        const headerTitle = getByRole('heading', { level: 2 });
        expect(headerTitle).toBeInTheDocument();
    });

    test('renders the sub-section title', () => {
        const headerTitle = getByRole('heading', { level: 3 });
        expect(headerTitle).toBeInTheDocument();
    });
});
