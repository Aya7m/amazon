import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <div className='navbar justify-between bg-base-300'>
              <Link href="/" className="btn btn-ghost normal-case text-xl"> Amazon Clone</Link>

              <ul className='flex gap-4'>
                <li className=''>
                  <Link href="/cart" className='btn btn-ghost'>Cart</Link>
                </li>
                <li>
                  <Link href="/signup" className='btn btn-ghost'>Signup</Link>
                </li>

              </ul>
              

            </div>
        </nav>
    </header>
  )
}

export default Header