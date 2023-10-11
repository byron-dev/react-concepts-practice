import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import HomePage from "../HomePage";

test('renders the React Components Practice headline', () => {
    render(<HomePage />)
    const pageHeadline = screen.getByText(/React Concepts Practice/i)
    expect(pageHeadline).toBeInTheDocument()
})

