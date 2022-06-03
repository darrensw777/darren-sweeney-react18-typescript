import { InterestLists } from 'modules';
import testSetUp from 'utils/testSetUp';

describe('InterestLists module', () => {
    const interests = [
        {
            question: 'Music',
            answers: ['Journey', 'Steve Perry', '80s AOR', 'Simon & Garfunkel', 'Keane'],
        },
        {
            question: 'TV Shows',
            answers: ['Suits', 'Breaking Bad', 'The Witcher', 'Peaky Blinders', 'Mad Men', 'The Boys', 'Killing Eve'],
        },
    ];

    let asFragment: any, container: any;
    beforeEach(() => {
        ({ asFragment, container } = testSetUp({
            Component: <InterestLists interests={interests} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the interest lists', () => {
        const interestLists = container.getElementsByClassName('question-container');
        expect(interestLists.length).toBe(2);
    });
});
