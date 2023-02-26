import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function RootLayout({children}) {
  return (
      <div>
          <header className='flex justify-start  bg-gray-500 items-center'>
              <nav className='flex justify-between w-1/3 h-16 text-white items-center'>
                  <Link to={"/"}>Home</Link>
                  <Link to={"/superhroes"}>superHeroes</Link>
                  <Link to={"/Rqsuperhroes"}>RQsuperheroes</Link>
              </nav>
          </header>
          <main className='mt-10'>
                 <Outlet/>
          </main>
     
    </div>
  )
}
