import MobileNav from '@/components/share/mobileNav'
import SideBar from '@/components/share/sideBar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Layout = ({children}: {children:React.ReactNode}) => {
  return (
    <main className='root'>
      <SideBar/>
      <MobileNav/>
        <div className='root-container'>
            <div className='wrapper'>
            {children}
            </div>
        </div>
        <Toaster/>
    </main>
  )
}

export default Layout
