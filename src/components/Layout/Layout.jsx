import { Navigation } from 'components/Navigation/Navigation'
import React from 'react'
import { Outlet } from 'react-router-dom'
import css from './Layout.module.css'

const Layout = () => {
  return (<>
    <header className={css.header}>
        <Navigation/>
    </header>
    <Outlet/>
    </>
  )
}

export default Layout
