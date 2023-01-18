import React from 'react'

export default function Message({ message: { text, user }, name }) {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        <>
            {
                isSentByCurrentUser ? (
                    <div class="alert alert-light" role="alert" style={{ marginLeft: "30px" }}>
                        {text}
                    </div>
                ) : (
                    <>
                        {
                            user === "admin" ? (
                                <center>
                                    <span class="badge text-bg-dark mb-3">{text}</span>
                                </center>

                            ) : (
                                <div class="alert alert-dark" role="alert" style={{ marginRight: "30px" }}>
                                    {user} : {text}
                                </div>
                            )
                        }
                    </>
                )
            }
        </>
    )
}
