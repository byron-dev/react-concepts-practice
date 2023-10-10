import React from 'react'
import { createPortal } from 'react-dom'

const element = document.getElementById('portal')

function Message(props) {

    const { children } = props

    return (
        <div>
            {createPortal(children, element)}
        </div>
    )
}

export default Message
