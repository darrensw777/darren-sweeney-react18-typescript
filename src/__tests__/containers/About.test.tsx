import { About } from 'containers';
import testSetUp from 'utils/testSetUp';

describe('About container', () => {
    let getByText: any, asFragment: any, container: any, getByRole: any, getAllByRole: any;
    beforeEach(() => {
        ({ asFragment, getByText, container, getByRole, getAllByRole } = testSetUp({
            Component: <About />,
        }));
    });

    test('renders the page title', () => {
        const headerTitle = getByRole('heading', { level: 1 });
        expect(headerTitle).toBeInTheDocument();
    });

    test('renders the section title', () => {
        const headerTitle = getByRole('heading', { level: 2 });
        expect(headerTitle).toBeInTheDocument();
    });

    test('renders the sub-section title', () => {
        const headerTitle = getByRole('heading', { level: 3 });
        expect(headerTitle).toBeInTheDocument();
    });

    test('renders the page description', () => {
        const subtitleElement = container.querySelectorAll('.sub-title');
        expect(subtitleElement.length).toBe(1);
    });
});
