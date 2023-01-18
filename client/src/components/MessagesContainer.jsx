import React from 'react'
import Message from './Message'

export default function MessagesContainer({ messages, name }) {
    return (
        <div className="mb-3" style={{ height: "700px", overflow: "auto", padding: "10px" }}>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </div>
    )
}
