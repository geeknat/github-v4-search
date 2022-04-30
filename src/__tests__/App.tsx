import {cleanup, render, screen} from '@testing-library/react';
import App from "../App";

afterEach(cleanup)

test('App is rendered and search input visible', () => {
    render(<App/>);
    const searchInputEl = screen.getByTestId(/search-input/i);
    expect(searchInputEl).toBeInTheDocument();
})


