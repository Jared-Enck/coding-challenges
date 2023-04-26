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

  const isActive = state === 'active'

  const isActiveClass = 
    isActive
      ? 'success'
      : 'warning'

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
      <div className="d-flex">
        <div className="align-self-center">
          <span>
            Status:       
          </span>
          <span className={`ps-2 text-${isActiveClass}`}>
            {state}
          </span>
        </div>
        {
          !isActive
            ? (
              <button 
                className="btn btn-sm btn-primary ms-auto"
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