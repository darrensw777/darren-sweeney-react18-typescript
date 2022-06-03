import { Footer } from 'modules';
import testSetUp from 'utils/testSetUp';

describe('Footer module', () => {
    const currentYear = new Date().getFullYear();

    let getByText: any, asFragment: any, container: any;
    beforeEach(() => {
        ({ asFragment, getByText, container } = testSetUp({ Component: <Footer /> }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the footer', () => {
        const footer = container.getElementsByClassName('footer');
        expect(footer.length).toBe(1);
    });

    test('renders the copyright year', () => {
        expect(getByText(`©${currentYear} Darren Sweeney`)).toBeInTheDocument();
    });
});
