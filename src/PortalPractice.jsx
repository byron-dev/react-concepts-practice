import React, { useState } from 'react'
import Message from './Message'

function PortalPractice() {
    const [messageVisible, setMessageVisible] = useState()

    const showMessage = () => {
        setMessageVisible(true)
    }

    const hideMessage = () => {
        setMessageVisible(false)
    }

    return (
        <div className='btn-wrapper'>
            <h1>React Portals</h1>
            <p onClick={showMessage}>Click to show 'Peace' message ✌🏼</p>

            <div onClick={hideMessage}>
                <Message>
                    {messageVisible &&
                        <div className='thanks-message'>
                            <p>Peace! ✌🏼</p>
                        </div>}
                </Message>
            </div>

        </div>
    )
}

export default PortalPractice
