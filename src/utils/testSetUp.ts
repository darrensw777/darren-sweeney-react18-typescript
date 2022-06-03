import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

const testSetUp = ({ Component }: { Component: ReactElement }) => {
    const { container, getByText, getByRole, asFragment, getAllByRole, getByTestId, getByTitle } = render(Component, {
        wrapper: MemoryRouter,
    });
    return {
        container,
        getByText,
        getByRole,
        asFragment,
        getAllByRole,
        getByTestId,
        getByTitle,
    };
};

export default testSetUp;
