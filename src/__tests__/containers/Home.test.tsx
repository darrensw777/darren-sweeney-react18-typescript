import { Home } from 'containers';
import testSetUp from 'utils/testSetUp';

describe('Home container', () => {
    let getByText: any, asFragment: any, container: any, getByRole: any, getAllByRole: any;
    beforeEach(() => {
        ({ asFragment, getByText, container, getByRole, getAllByRole } = testSetUp({
            Component: <Home />,
        }));
    });

    test('renders the page title', () => {
        const headerTitle = getByRole('heading', { level: 1 });
        expect(headerTitle).toBeInTheDocument();
    });

    test('renders the page description', () => {
        const subtitleElement = container.querySelectorAll('.sub-title');
        expect(subtitleElement.length).toBe(1);
    });
});
