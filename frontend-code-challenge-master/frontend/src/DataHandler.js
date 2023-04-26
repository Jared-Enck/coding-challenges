import React, { useState, useEffect } from 'react'
import YodlrApi from './api'
import DataContext from './DataContext'
import LoadingSpinner from './common/LoadingSpinner'

export default function DataHandler({children}) {
  const [users, setUsers] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [newUserData, setNewUserData] = useState('')
  const [removeUserID, setRemoveUserID] = useState('')
  const [activateUserID, setActivateUserID] = useState('')

  useEffect(() => {
    async function updateUsers() {
      async function removeUser() {
        await YodlrApi.deleteUser(removeUserID)
        console.log(`Deleted user.`)
        setRemoveUserID('')
      }
      if (removeUserID) {
        removeUser()
      }
      async function activateUser() {
        const user = await YodlrApi.activateUser(activateUserID)
        console.log(`Update user id: ${user.id} state to ${user.state}`)
        setActivateUserID('')
      }
      if (activateUserID) {
        activateUser()
      }
      async function getUsers() {
        const results = await YodlrApi.getUserList()
        setUsers(results)
        setIsLoading(false)
      }
      getUsers()
      async function addUser() {
        const user = await YodlrApi.postUser(newUserData)
        console.log(`Added new user ${user.firstName} ${user.lastName}`)
        setUsers(...users, user)
        setNewUserData('')
      }
      if (newUserData) {
        addUser()
      }
    }
    updateUsers()
  },[removeUserID,activateUserID,newUserData])

  if(isLoading) return <LoadingSpinner />

  return (
    <DataContext.Provider
      value={
        {
          users,
          setNewUserData,
          setRemoveUserID,
          setActivateUserID
        }
      }
    >
      {children}
    </DataContext.Provider>
  )
}