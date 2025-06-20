import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@/auth'
import { signIn, signOut } from '@/auth'

const Navbar = async() => {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans text-black'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>
          <Image src='/Group 5.png' alt='Logo' width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5">
          {session && session ?.user  ? (
            <>
            <Link href="/startup/create">
              <span>Create</span>
            </Link>
            <form action={async () => {
              "use server";
              await signOut( { redirectTo: "/" });
            }}>
              <button type='submit'>
              <span>LogOut</span></button>
            </form>
            <Link href={`/user/${session?.user?.id}`}>
              <span>{session?.user?.name}</span>
            </Link>
            </>
            ):(
              <form action={ async ()=>{
                "use server";
                await signIn( 'github');
                }}>
                <button type="submit">
                  <span>SignIn</span>
                </button>
              </form>
            )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
