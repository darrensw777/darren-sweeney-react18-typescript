import { Header } from 'modules';
import testSetUp from 'utils/testSetUp';

describe('Header module', () => {
    let asFragment: any, container: any, getAllByRole: any;
    beforeEach(() => {
        ({ asFragment, container, getAllByRole } = testSetUp({ Component: <Header /> }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the header', () => {
        const header = container.getElementsByClassName('header');
        expect(header.length).toBe(1);
    });

    test('renders the header link', () => {
        const anchorElements = getAllByRole('navigation');
        expect(anchorElements[0]).toHaveTextContent('Darren Sweeney');
        expect(anchorElements[0]).toHaveAttribute('href', '/');
    });
});
