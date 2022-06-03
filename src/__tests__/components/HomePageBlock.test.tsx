import { waitFor } from '@testing-library/react';
import { HomePageBlock } from 'components';
import testSetUp from 'utils/testSetUp';

describe('HomePageBlock component', () => {
    const componentProps = {
        link: '/link/path',
        homeImagePath: '/image/path',
        iconClass: 'icon-class',
        title: 'myTitle',
        backgroundColor: 'red',
    };

    let getByText: any, asFragment: any, container: any, getByRole: any;
    beforeEach(() => {
        ({ asFragment, getByText, container, getByRole } = testSetUp({ Component: <HomePageBlock {...componentProps} /> }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('homepage-block');
        expect(blocks.length).toBe(1);
    });

    test('renders the correct link', () => {
        expect(getByRole('link')).toHaveAttribute('href', componentProps.link);
    });

    test('renders the correct title', () => {
        expect(getByText(/myTitle/i)).toHaveTextContent('myTitle');
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('homepage-block');
        expect(blocks.length).toBe(1);
    });

    test('renders the correct image path', async () => {
        const image = getByRole('img') as HTMLImageElement;
        await waitFor(() => expect(image.src === '/image/path'));
    });
});
