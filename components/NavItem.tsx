import React from 'react'
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

type NavProps = {
  href: string
  text: string
}

const NavItem = ({ href, text }: NavProps) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'text-red-600'
          : 'font-semibold text-sm text-gray-600 dark:text-gray-400',
        'hidden md:inline-block font-semibold p-1 sm:px-3 sm:mx-2 sm:py-2 rounded-lg hover:font-bold dark:hover:bg-gray-800 transition-all'
      )}>
      <span className='capsize'>{text}</span>
    </NextLink>
  )
}

export default NavItem
