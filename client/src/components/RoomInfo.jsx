import React from 'react'

export default function RoomInfo({ users, room }) {
    console.log(users);
    return (
        <>
            <div class="alert alert-primary mt-3 mb-1" role="alert">
                Room - {room}
            </div>
            <h6 className='mb-1'>Online</h6>
            <div className='mb-2'>
            {
                users &&
                users?.map(({ name }) => (
                    <span class="badge text-bg-success" style={{margin: "2px"}}>{name}</span>
                ))
            }
            </div>
        </>
    )
}
