import React from 'react'

export default function Input({ message, sendMessage, setMessage }) {
    return (
        <>
            <div>
                <form className="form d-flex gap-2 mb-3">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Type a message..."
                        value={message}
                        onChange={({ target: { value } }) => setMessage(value)}
                        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                    />
                    <button className="btn btn-outline-dark" onClick={e => sendMessage(e)}>Send</button>
                </form>
            </div>
        </>
    )
}
