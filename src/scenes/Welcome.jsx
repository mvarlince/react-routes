import { Link } from "react-router-dom"
import logo from "../logo.svg"

export default function Welcome({setIsLoggedIn}){
    return (
        <>
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Welcome to React</h1>
        <Link to="/home" className="App-link"> Home </Link>
        </>
    )
}