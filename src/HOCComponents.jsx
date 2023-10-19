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
            <p>We created a function that takes a component (the one we want to modify) as parameter and creates
                another component with custom logic which is passed as props to the component we want to modify.</p>
            <p>In <code>src/HOCComponents.jsx</code>, we use the function <code>modifierComponent</code> that takes an original component as
                parameter and then returns that same component but with the counter and the function to update it injected to it.</p>
            <p>In that way, we can create two components <code>PeopleCounter</code> and <code>CoupleCounter</code> and passed
                them to the <code>modifierComponent</code> to reuse its logic without sharing the state between the two components.</p>
            <p>Here is an example: ⬇️</p>
            <p><span>Note:</span></p>
            <p>Check that the <code>modifierComponent</code> function has a function component to create the HOC, but it also
                has in comments the code to create a HOC with a class component.</p>
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
