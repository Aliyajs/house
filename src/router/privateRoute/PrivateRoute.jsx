import { Redirect, Route } from "react-router-dom"


export const PrivateRoute = ({Component, path}) => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user);
    if(user === null) return <Redirect to="/auto" />
    return <Route path={path}> <Component /> </Route>
}