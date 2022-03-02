import React from 'react'
import styles from '../../styles/Home.module.css'

function Header() {
  return (
    <div className="m-0 p-0">
      {/* Code block starts */}
      <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-center md:items-center justify-center pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-2xl font-bold leading-tight text-black text-center">Takumi Ueno's Portfolio</h4>
        </div>
        {/* <div className="mt-6 md:mt-0">
          <button className="mr-3 bg-gray-200 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700  px-5 py-2 text-sm">Back</button>
          <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Edit Profile</button>
        </div> */}
        {/* Code block ends */}
      </div>
    </div>

  )
}

export default Header