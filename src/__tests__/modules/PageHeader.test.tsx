import { PageHeader } from 'modules';
import testSetUp from 'utils/testSetUp';

describe('PageHeader module', () => {
    const pageTitle = {
        title: 'title',
        subTitle: 'subTitle',
    };

    let getByText: any, asFragment: any, container: any, getByRole: any;
    beforeEach(() => {
        ({ asFragment, getByText, container, getByRole } = testSetUp({
            Component: <PageHeader pageTitle={pageTitle} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the page header', () => {
        const pageHeader = container.getElementsByClassName('page-header');
        expect(pageHeader.length).toBe(1);
    });

    test('renders the page title', () => {
        const headerTitle = getByRole('heading', { level: 1 });
        expect(headerTitle).toBeInTheDocument();
    });

    test('renders the correct title', () => {
        expect(getByText(pageTitle.title)).toBeInTheDocument();
    });

    test('renders the correct subTitle', () => {
        expect(getByText(pageTitle.subTitle)).toBeInTheDocument();
    });
});
