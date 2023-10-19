import React, { useState } from 'react'
import Message from './Message'
import { useNavigate } from 'react-router-dom'

function PortalPractice() {
    const [messageVisible, setMessageVisible] = useState()
    const navigate = useNavigate()

    const showMessage = () => {
        setMessageVisible(true)
    }

    const hideMessage = () => {
        setMessageVisible(false)
    }

    return (
        <div className='btn-wrapper'>
            <button onClick={() => { navigate('/homePage') }}>
                Back to Home Page
            </button>
            <h1>React Portals</h1>
            <p>To see this example, open <code>index.html</code>, <code>src/Message.jsx</code>, and <code>src/PortalPractice.jsx</code>.</p>
            <p>First, notice that we define another div with the id "portal" in the index.html.</p>
            <p>There we'll show our portal.</p>
            <p>We defined the logic to show content in the portal in <code>src/Message.jsx</code> where we create the
                portal using the div we created previously.</p>
            <p>Then, we use that logic in the file <code>src/PortalPractice.jsx</code> where we surround the div with the className "peace-message"
                with the Message component.</p>
            <p className='centered' onClick={showMessage}>Click to show 'Peace' message ✌🏼</p>

            <div onClick={hideMessage}>
                <Message>
                    {messageVisible &&
                        <div className='peace-message'>
                            <p>Peace! ✌🏼 (Click to hide)</p>
                        </div>}
                </Message>
            </div>

        </div>
    )
}

export default PortalPractice
