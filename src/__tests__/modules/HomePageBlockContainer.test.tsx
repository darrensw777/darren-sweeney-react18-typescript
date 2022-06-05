import { HomePageBlockContainer } from 'modules';
import testSetUp from 'utils/testSetUp';
import navLinksAndStyles from "utils/navLinksAndStyles";

describe('HomePageBlockContainer container', () => {
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

    let asFragment: any, container: any;
    beforeEach(() => {
        ({ asFragment, container } = testSetUp({
            Component: <HomePageBlockContainer navLinksAndStyles={navLinksAndStyles} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('home-group-container');
        expect(blocks.length).toBe(1);
    });
});
