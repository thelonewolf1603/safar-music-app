import React,{useContext} from "react"
import { Route, Redirect } from "react-router-dom"
import { SigninContext } from "./datacontext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(SigninContext)

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}