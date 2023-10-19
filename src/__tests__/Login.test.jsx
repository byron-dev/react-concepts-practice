import React from "react";
import Login from "../Login";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it('Should show a form with email and password fields', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>)

    expect(queryByTestId('login-form')).toBeTruthy()
    expect(queryByPlaceholderText('Email')).toBeTruthy()
    expect(queryByPlaceholderText('Password')).toBeTruthy()
})

it('Should display text on inputs', () => {
    const { queryByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>)

    const emailField = queryByPlaceholderText('Email')

    fireEvent.change(emailField, { target: { value: 'johndoe@example.net' } })

    expect(emailField.value).toBe('johndoe@example.net')
})