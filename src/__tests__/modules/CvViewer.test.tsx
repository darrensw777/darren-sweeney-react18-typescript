import { fireEvent, waitFor } from '@testing-library/react';
import { CvViewer } from 'modules';
import testSetUp from 'utils/testSetUp';

describe('CvViewer container', () => {
    let getByText: any, asFragment: any, container: any, getByRole: any, getByTestId: any;
    beforeEach(() => {
        ({ asFragment, getByText, container, getByRole, getByTestId } = testSetUp({
            Component: <CvViewer />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('cv-viewer');
        expect(blocks.length).toBe(1);
    });

    test('renders the increment and decrement buttons', () => {
        const decrementButton = getByTestId('previousPage');
        const incrementButton = getByTestId('nextPage');
        expect(decrementButton).toBeInTheDocument();
        expect(incrementButton).toBeInTheDocument();
        expect(getByText('Page 1 of 4')).toBeInTheDocument();
    });

    test('checks the text changes re page currently on', () => {
        const decrementButton = getByTestId('previousPage');
        const incrementButton = getByTestId('nextPage');
        fireEvent.click(incrementButton);
        expect(getByText('Page 2 of 4')).toBeInTheDocument();
        fireEvent.click(incrementButton);
        expect(getByText('Page 3 of 4')).toBeInTheDocument();
        fireEvent.click(decrementButton);
        expect(getByText('Page 2 of 4')).toBeInTheDocument();
    });

    test('renders the correct image path', async () => {
        const image = getByRole('img') as HTMLImageElement;
        await waitFor(() => expect(image.src === '/img/cv/ds1.webp'));
    });

    test('renders the correct image path after click', async () => {
        const decrementButton = getByTestId('previousPage');
        const incrementButton = getByTestId('nextPage');
        const image = getByRole('img') as HTMLImageElement;

        await waitFor(() => expect(image.src === '/img/cv/ds1.webp'));
        
        fireEvent.click(incrementButton);
        await waitFor(() => expect(image.src === '/img/cv/ds2.webp'));

        fireEvent.click(incrementButton);
        await waitFor(() => expect(image.src === '/img/cv/ds3.webp'));

        fireEvent.click(decrementButton);
        await waitFor(() => expect(image.src === '/img/cv/ds2.webp'));

        fireEvent.click(decrementButton);
        await waitFor(() => expect(image.src === '/img/cv/ds1.webp'));
    });
});
