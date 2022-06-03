import Layout from 'layouts';
import testSetUp from 'utils/testSetUp';

describe('Home container', () => {
    let container: any;
    beforeEach(() => {
        ({ container } = testSetUp({
            Component: (
                <Layout>
                    <></>
                </Layout>
            ),
        }));
    });

    test('renders the header', () => {
        const headerElement = container.querySelectorAll('.header');
        expect(headerElement.length).toBe(1);
    });

    test('renders the footer', () => {
        const footerElement = container.querySelectorAll('.footer');
        expect(footerElement.length).toBe(1);
    });
});
