import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <div className="header">
            <div className='name-bar'>
                <h3>Shyam.dev</h3>
            </div>
            <div className="menu-toggle" onClick={() => setOpen(!open)}>
                ☰
            </div>
            <div className={`nav-items ${open ? "open" : ""}`}>
                <NavLink to="/"         className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Home</NavLink>
                <NavLink to="/about"    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>About me</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Projects</NavLink>
                <NavLink to="/contact"  className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Contact</NavLink>
            </div>
            <div className='hire-btn'>
                <NavLink to="/contact" className='nav-item'>Hire me</NavLink>
            </div>
        </div>
    )
}