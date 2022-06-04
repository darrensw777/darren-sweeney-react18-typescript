import { fireEvent } from '@testing-library/react';
import { CvPagination } from 'components';
import testSetUp from 'utils/testSetUp';

describe('CvPagination component', () => {
    const componentProps = {
        cvPages: ['dsCV1.webp', 'dsCV2.webp', 'dsCV3.webp', 'dsCV4.webp'],
        CV_VIEWER: {
            PAGE: 'Page',
            OF: 'of',
            NEXT: 'Next',
            PREVIOUS: 'Previous'
        },
        setPageState: () => { },
        pageState: {
            pageNumber: 1
        }
    }

    let getByText: any, asFragment: any, container: any, getByTestId: any;
    beforeEach(() => {
        ({ asFragment, getByText, container, getByTestId } = testSetUp({
            Component: <CvPagination {...componentProps} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the block', () => {
        const blocks = container.getElementsByClassName('pagination');
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

    // test('renders the correct image path', async () => {
    //     const image = getByRole('img') as HTMLImageElement;
    //     await waitFor(() => expect(image.src === '/img/cv/ds1.webp'));
    // });

    // test('renders the correct image path after click', async () => {
    //     const decrementButton = getByTestId('previousPage');
    //     const incrementButton = getByTestId('nextPage');
    //     const image = getByRole('img') as HTMLImageElement;

    //     await waitFor(() => expect(image.src === '/img/cv/ds1.webp'));

    //     fireEvent.click(incrementButton);
    //     await waitFor(() => expect(image.src === '/img/cv/ds2.webp'));

    //     fireEvent.click(incrementButton);
    //     await waitFor(() => expect(image.src === '/img/cv/ds3.webp'));

    //     fireEvent.click(decrementButton);
    //     await waitFor(() => expect(image.src === '/img/cv/ds2.webp'));

    //     fireEvent.click(decrementButton);
    //     await waitFor(() => expect(image.src === '/img/cv/ds1.webp'));
    // });
});
