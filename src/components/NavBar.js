import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  return (
    <header className="bg-blue-500">
      <div className="container mx-auto flex justify-between flex-wrap">
        <nav className="flex flex-wrap ">
          <NavLink
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-900 text-5xl font-bold cursive tracking-widest"
            to="/"
            exact
          >
            Ivan Eremeev
          </NavLink>
          <NavLink
            activeClassName="text-white bg-blue-600"
            className="inline-flex items-center px-3 py-2 my-6 rounded text-blue-100 hover:text-blue-900 text-2xl"
            to="/post"
          >
            Blog
          </NavLink>
          <NavLink
            activeClassName="text-white bg-blue-600"
            className="inline-flex items-center px-3 py-2 my-6 rounded text-blue-100 hover:text-blue-900 text-2xl"
            to="/project"
          >
            Project
          </NavLink>
          <NavLink
            activeClassName="text-white bg-blue-600"
            className="inline-flex items-center px-3 py-2 my-6 rounded text-blue-100 hover:text-blue-900 text-2xl"
            to="/about"
          >
            About me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 flex-wrap">
          <SocialIcon
            className="mr-4"
            url="https://vk.com/idunaverh"
            target="_blank"
            bgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            className="mr-4"
            url="https://github.com/stee1y"
            target="_blank"
            fgColor="#000"
            bgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            className="mr-4"
            url=""
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}
