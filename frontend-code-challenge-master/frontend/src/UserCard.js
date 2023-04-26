import React, {useContext} from "react"
import DataContext from "./DataContext"

export default function UserCard({user}) {
  const {setRemoveUserID, setActivateUserID} = useContext(DataContext)
  const {firstName, lastName, email, state} = user
  const fullName = firstName.concat(' ',lastName)

  function handleDelete() {
    setRemoveUserID(user.id)
  }
  function handleActivate() {
    setActivateUserID(user.id)
  }

  return (
    <div className="card-body">
      <div className="card-title d-flex">
        <h2 className="flex-fill">
          {fullName}
        </h2>
        <button 
          className="mb-3 btn btn-sm btn-outline-danger"
          onClick={handleDelete}
        >
          X
        </button>
      </div>
      <span>
        {email}
      </span><br/>
      <div className="d-flex justify-content-between">
        <span className="align-self-center">
          Status: {state}
        </span>
        {
          state !== 'active'
            ? (
              <button 
                className="btn btn-sm btn-primary"
                onClick={handleActivate}
              >
                Activate
              </button>
            )
            : null
        }
      </div>
    </div>
  )
}