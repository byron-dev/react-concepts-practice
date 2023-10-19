import React from 'react'
import styled from 'styled-components'
import { json, useNavigate } from 'react-router-dom'


function StyledComponents() {
    const navigate = useNavigate()

    const Wrapper = styled.section`
        border-radius: 15px;
        background-color: ${(props) => (props.purple && '#645cfc') || '#222222'};
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
            <p>To see this example, go to <code>src/StyledComponents.jsx</code>.</p>
            <p>In that file, we created two styled components at the top: <code>Wrapper</code> that is a section and <code>Title</code> that is an H1</p>
            <p>The purple wrapper was styled based on a prop.</p>
            <p>If you pass the <span>purple</span> prop as true, the wrapper will be purple, if you don't pass it, then it will be dark gray.</p>
            <Wrapper purple={true}>
                <Title>Hello World!</Title>
                <BodyText>The title is also a styled component.</BodyText>
            </Wrapper>
        </>
    )
}

export default StyledComponents
