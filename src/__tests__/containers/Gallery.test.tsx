import { Gallery } from 'containers';
import testSetUp from 'utils/testSetUp';

describe('Gallery container', () => {
    let container: any, getByRole: any;
    beforeEach(() => {
        ({ container, getByRole } = testSetUp({
            Component: <Gallery />,
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
