import React from "react"
import { useDispatch } from "react-redux"

import "./Auth.css"
import { authActions } from "../store/auth-slice"

const Auth = () => {
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(authActions.login())
	}
	return (
		<div className="loginForm">
			<div className="container">
				<h1>Login</h1>{" "}
				<form onSubmit={handleSubmit}>
					<label htmlFor="id">Id</label>
					<input type="text" name="id" id="id" required/>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" required />
					<button className="login-btn" type="submit">
						Login
					</button>
				</form>
			</div>
		</div>
	)
}

export default Auth
