import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'
import LogoImage from '@/assets/images/logo.svg'
const Logo:FC = () => {
  return (
    <Link href='/'>
        <a className='ps-layout block mb-10'>
            <Image
                src={LogoImage}
                width={247}
                height={34}
                draggable={false}
                alt='Logo'
            />
        </a>
    </Link>
  )
}

export default Logo