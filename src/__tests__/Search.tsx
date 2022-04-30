import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import App from "../App";

afterEach(cleanup)

test('User can search for a query', async () => {
    render(<App/>);
    const searchInputEl = screen.getByTestId(/search-input/i);

    fireEvent.change(searchInputEl, {target: {value: 'geek'}})

    setTimeout(() => {
        const userResultCard = screen.getByTestId(/userItemID/i)
        expect(userResultCard).toBeInTheDocument()
    }, 3000)

})


