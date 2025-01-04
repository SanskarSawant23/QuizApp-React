import React from 'react'

const Quiz = () => {
  return (
    <div className="h-screen flex grid gird-cols-1 justify-center items-center bg-gray-100">
        
    <div className="grid grid-cols-1 bg-white w-[640px] rounded-md text-center p-10">
        
      <h2 className="mt-4">Which device is required for the Internet Connection</h2>
      <ul className="list-disc mt-4">
        <li>Modem</li>
        <li>Router</li>
        <li>LAN Cable</li>
        <li>Pen Drive</li>
      </ul>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Next</button>
      <div className="mt-4 text-gray-500">1 of 5 questions</div>
    </div>
  </div>
  
  )
}

export default Quiz