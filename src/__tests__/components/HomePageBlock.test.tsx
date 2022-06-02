import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePageBlock } from 'components';

describe('HomePageBlock component', () => {
    const componentProps = {
        link: '/link/path',
        homeImagePath: '/image/path',
        iconClass: 'icon-class',
        title: 'myTitle',
        backgroundColor: 'red',
    };

    const setUp = () => {
        const { container, getByText, getByRole, asFragment } = render(<HomePageBlock {...componentProps} />, {
            wrapper: MemoryRouter,
        });
        return {
            container,
            getByText,
            getByRole,
            asFragment,
        };
    };

    it('matches snapshot', () => {
        expect(setUp().asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = setUp().container.getElementsByClassName('homepage-block');
        expect(blocks.length).toBe(1);
    });

    test('renders the correct link', () => {
        expect(setUp().getByRole('link')).toHaveAttribute('href', componentProps.link);
    });

    test('renders the correct title', () => {
        expect(setUp().getByText(/myTitle/i)).toHaveTextContent('myTitle');
    });

    test('renders the block', () => {
        const blocks = setUp().container.getElementsByClassName('homepage-block');
        expect(blocks.length).toBe(1);
    });

    test('renders the correct image path', async () => {
        const image = setUp().getByRole('img') as HTMLImageElement;
        await waitFor(() => expect(image.src === '/image/path'));
    });
});
