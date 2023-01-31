import React from 'react'

interface ILayoytProps {
  children : React.ReactNode
}


export default function Layout({children} : ILayoytProps) {

  return (
    <div className='max-w-screen-xl mx-auto px-2 py-2'>
      {children}
    </div>
  )
}
