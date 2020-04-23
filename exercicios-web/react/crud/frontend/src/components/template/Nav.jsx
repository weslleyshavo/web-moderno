import './Nav.css'
import React from 'react'
import NavItems from './NavItems'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItems href="/" icon="fa fa-home" title="Início" />
            <NavItems href="/users" icon="fa fa-users" title="Usuários" />
        </nav>
    </aside>