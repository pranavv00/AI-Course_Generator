import React from 'react'
import { Sidebar } from 'lucide-react'
import SideBar from './_components/SideBar'

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar section */}
      <div className="w-64 hidden md:block bg-gray-100 p-4">
        <SideBar className='w-6 h-6 text-gray-700'/>
      </div>

      {/* Main content */}
      <div className="flex-1 ">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
