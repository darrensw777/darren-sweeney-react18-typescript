import { ContactFormik } from 'modules';
import { CONTACT_COPY } from 'constants/en/containers/contact';
import testSetUp from 'utils/testSetUp';

describe('ContactFormik container', () => {
    let getByText: any, asFragment: any, container: any, getByRole: any, getAllByRole: any;
    beforeEach(() => {
        ({ asFragment, getByText, container, getByRole, getAllByRole } = testSetUp({
            Component: <ContactFormik CONTACT_COPY={CONTACT_COPY} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('form-wrapper');
        expect(blocks.length).toBe(1);
    });
});
