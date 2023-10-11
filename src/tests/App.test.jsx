import React from "react";
import App from "../App";
import { fireEvent, render } from "@testing-library/react";

it('Should show a form with email and password fields', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<App />)

    expect(queryByTestId('login-form')).toBeTruthy()
    expect(queryByPlaceholderText('Email')).toBeTruthy()
    expect(queryByPlaceholderText('Password')).toBeTruthy()
})

it('Should display text on inputs', () => {
    const { queryByPlaceholderText } = render(<App />)

    const emailField = queryByPlaceholderText('Email')

    fireEvent.change(emailField, { target: { value: 'johndoe@example.net' } })

    expect(emailField.value).toBe('johndoe@example.net')
})