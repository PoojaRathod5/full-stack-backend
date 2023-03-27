import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h1>Product List</h1>
        <Link to="/">Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/posts"}>Posts</Link>
    </div>
  )
}