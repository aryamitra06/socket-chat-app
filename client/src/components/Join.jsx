import React from 'react'
import { Link } from "react-router-dom";

export default function Join({ setName, setRoom, room, name }) {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5">
            <div className="card mt-5">
              <div className="card-body">
                <h3>Join Chat</h3>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">Name</label>
                  <input type="text" className="form-control" id="nameInput" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="roomInput" className="form-label">Room</label>
                  <input type="text" className="form-control" id="roomInput" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat`}>
                  <button type="submit" className="btn btn-primary w-100">Join</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
