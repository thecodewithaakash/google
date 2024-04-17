import { Avatar } from '@material-ui/core';
import {  GridOnSharp, Mic, Search } from '@material-ui/icons';
import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Footer from '../components/Footer';
// import Avatar from '../components/Avatar';


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);


  const search = (e) =>{
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return;
    router.push(`/search?term=${term}`)

  }

  return (
  <div className='flex flex-col items-center justify-center h-screen'>
 <Head>
  <title>Google</title>
  <link rel="icon" href="/img/google.png"/>
 </Head>

    {/* Header */}
<header className='flex w-full p-5 justify-between text-sm text-gray-700'>
  {/* left  */}
  <div className='flex space-x-4 items-center'>
    <p className='link'>About</p>
    <p className='link'>Store</p>
  </div>

  {/* Right  */}
  <div className='flex space-x-4 items-center'>
    <p className='link'>Gmail</p>
    <p className='link'>Images</p>

    {/* Icon  */}
    <GridOnSharp className=" cursor-pointer hover:bg-gray-100"/>

    {/* Avatar - material UI  */}
    <Avatar src="/img/profile.jpg" className="cursor-pointer h-10 translate duration-150 transform 
  hover:scale-110 "/>

    {/* Avatar - components */}
    {/* <Avatar url="/img/profile.jpg"/> */}

  </div>
</header>


    {/* Body */}

    <form className='flex flex-col items-center justify-center flex-grow w-4/5 '>
    <Image src="/img/logo.png" width={300} height={100} alt="google"/>

    <div className=' flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg 
    max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
    sm:max-w-xl lg:max-w-2xl
  '>
      <Search/>
      <input ref={searchInputRef} type="text" className=' flex-grow focus:outline-none' />
    <Mic/>

    </div>

    <div className='flex flex-col w-1/2 space-y-2 justify-center mt-2 sm:space-y-0 sm:flex-row sm:space-x-4'>
      <button onClick={search} className='btn'>Google Search</button>
      <button onClick={search} className='btn'>I,m feeling lucky</button>
    </div>

    </form>

    {/* Footer  */}

      <Footer/>

  </div>
  )
}
