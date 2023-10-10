import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'

function HOCComponents() {
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => { navigate('/homePage') }}>
                Back to Home Page
            </button>
            <br />
            <h1>High Order Components <span>(HOC)</span></h1>
            <br />
            <p>This is a way to re-use logic by injecting props (variables or methods) from a modifier
                component (the HOC) to the required component.</p>
            <p>We create a function that takes a component (the one we want to modify) as parameter and creates
                another component with custom logic which is passed to the component to modify as props.</p>
            <p>In this case we are sharing the state and the function to update that state without sharing the values.
                So, both buttons work independently.</p>
            <PeopleCounter />
            <CoupleCounter />
        </>
    )
}

const modifierComponent = (OriginalComponent) => {
    // HOC with Class Component
    /* class ModifiedCounter extends React.Component {
        constructor(props) {
            super (props)
            this.state = { counter: 0 }
        }

        increaseCounter = () => {
            this.setState (prevState => {
                return {counter: prevState.counter + 1}
            })
        }

        render() {
            return <OriginalComponent counter={this.state.counter} increaseCounter={this.increaseCounter} />
        }
    } */

    // HOC with Function Component
    const ModifiedCounter = () => {
        const [counter, setCounter] = useState(0)

        const increaseCounter = () => {
            setCounter(counter + 1)
        }

        return <OriginalComponent counter={counter} increaseCounter={increaseCounter} />
    }

    return ModifiedCounter
}

const PeopleCounter = modifierComponent((props) => {
    return (
        <button onClick={props.increaseCounter}>
            +1 person | Total = {props.counter}
        </button>
    )
})

const CoupleCounter = modifierComponent((props) => {
    return (
        <button onClick={props.increaseCounter}>
            +1 couple | Total = {props.counter}
        </button>
    )
})

export default HOCComponents
