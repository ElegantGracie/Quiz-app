import React from 'react'
import './nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';





const Nav = () => {
    return (
        <ul className="nav customnav">
            <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">View Highscores</a>
            </li>



            <abc><li className="nav-item ">
                <a className="nav-link" href="#">Time</a>
            </li>
            </abc>
        </ul>

    )
}

export default Nav