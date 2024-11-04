'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { NextPage } from 'next'

interface BackButtonProps {
    className?: string;
    children?: React.ReactNode;
  }

const BackButton:NextPage<BackButtonProps> = ({className, children}) => {
    const router = useRouter()
  return (
    <button
    className={`${className}`}
     onClick={()=>router.back()}>
        {children}
     </button>
  )
}

export default BackButton