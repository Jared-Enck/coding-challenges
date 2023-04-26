import React, { useContext } from "react"
import { Link } from "react-router-dom"
import './styles/SignUp.css'
import DataContext from "./DataContext"
import useFields from './hooks/useFields'

export default function SignUp() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: ''
  };
  const [formData,handleChange,setFormData] = useFields(initialState);
  const {setNewUserData} = useContext(DataContext);

  function handleSubmit(e) {
    e.preventDefault();
    setNewUserData(formData);
    setFormData(initialState);
  }
  return (
    <div className="container-sm">
      <div className="row">
        <h1 className="text-center">
          Yodlr Registration Portal        
        </h1>
        <form 
          id="signup"
          className="form-control col-12 col-sm-10 col-md-8 bg-light shadow"
        >
          <div className="mb-3">
            <label
              className="form-label"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input 
              className="form-control"
              type="text" 
              name="firstName"
              value={formData.value}
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label 
              className="form-label"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input 
              className="form-control"
              type="text" 
              name="lastName"
              value={formData.value}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label 
              className="form-label"
              htmlFor="email"
            >
              Email
            </label>
            <input 
              className="form-control"
              type="email" 
              name="email"
              value={formData.value}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <p className="mt-2 text-center">
          <Link to="/admin">Admin Page</Link>
        </p>
      </div>
    </div>
  )
}