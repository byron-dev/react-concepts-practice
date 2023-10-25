import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function RefsExample() {
    const nameInputRef = useRef()
    const lastNameInputRef = useRef()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameInputRef.current.value
        const lastName = lastNameInputRef.current.value

        console.log(`Name: ${name}, last name: ${lastName}`)
    }


    return (
        <>
            <button onClick={() => { navigate('/homePage') }}>
                Back to Home Page
            </button>
            <br />
            <h1>React Refs Example</h1>
            <p>To see this example open <code>src/RefsExample.jsx</code>.</p>
            <p>We defined two inputs and created the <code>nameInputRef</code> and the <code>lastNameInputRef</code> using the "useRef()" hook.</p>
            <p>We passed those refs to the inputs as props.</p>
            <p>Then, in the submit action of the form we used those same refs to get the values of the inputs so we can print them in the console.</p>
            <p>So go ahead and fill the inputs, open the console, submit the form and see how we can print the values you added using the useRef hook.</p>
            <div className="card">
                <form onSubmit={handleSubmit} className='centered'>
                    <label htmlFor='name'>Name</label>
                    <br />
                    <input id='name' ref={nameInputRef} placeholder='Name' />
                    <br />
                    <label htmlFor='lastName'>Last Name</label>
                    <br />
                    <input id='lastName' ref={lastNameInputRef} placeholder='Password' />
                    <br />
                    <input type='submit' value='Print Values' />
                </form>
            </div>
        </>
    )
}

export default RefsExample
