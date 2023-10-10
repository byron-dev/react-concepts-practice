import React from 'react'
import styled from 'styled-components'
import { json, useNavigate } from 'react-router-dom'


function StyledComponents() {
    const navigate = useNavigate()

    const Wrapper = styled.section`
        border-radius: 15px;
        background-color: ${(props) => (props.dark && '#222222') || '#645cfc'};
        padding: 20px;
    `
    const Title = styled.h1`
        color: #ffffff;
        text-decoration: underline;
    `

    const BodyText = styled.p`
    color: #ffffff;
`
    return (
        <>
            <button onClick={() => { navigate('/homePage') }}>
                Back to Home Page
            </button>
            <p>This is a wrapper styled based on a prop. ⬇️</p>
            <Wrapper>
                <Title>Hello World!</Title>
                <BodyText>This title is also a styled component.</BodyText>
            </Wrapper>
        </>
    )
}

export default StyledComponents
