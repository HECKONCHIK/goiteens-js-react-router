import { NavLink } from "react-router-dom"

export const AppNav = () => {
    return(
        <nav>
            <ul>
                <li><NavLink to = '/'>Home</NavLink></li>
                <li><NavLink className={({isPending})=>isPending ? 'loader' : null} to = '/books'>Books</NavLink></li>
            </ul>
        </nav >
    )
}