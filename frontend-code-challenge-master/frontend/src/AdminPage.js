import React, { useContext } from "react"
import DataContext from "./DataContext"
import UserCard from "./UserCard"

export default function AdminPage() {
  const { users } = useContext(DataContext)
  
  return (
    <div className="container-sm">
      <ul className="row">
      <h2 className="col-12 col-sm-10 col-md-8">
        Users
      </h2>
      <hr/>
        {
          users.map(u => (
            <li 
              key={u.id}
              className="col-12 col-sm-10 col-md-8 card bg-light shadow-sm"
            >
              <UserCard user={u} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}