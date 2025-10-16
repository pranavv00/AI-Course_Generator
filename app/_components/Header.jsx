import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between p-3 shadow-sm'>
        <Image 
          src="/image.png"
          width={200} 
          height={80} 
          alt="logo"
        />

        <Button asChild>
          <Link href="/sign-in"> Get Started </Link>
        </Button>
    </div>
  )
}

export default Header