import { Avatar } from '@material-ui/core';
import { Mic, Search } from '@material-ui/icons';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import HeaderOption from './HeaderOption';
import HeaderOptions from './HeaderOptions';






const Header = () => {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const search = (e) =>{
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;
    router.push(`/search?term=${term}`)
  

  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
      <Image
        src="/img/logo.png"
        alt="google clone"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />


      <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
        <input ref={searchInputRef} type="text"
          className='flex-grow w-full focus:outline-none'
          defaultValue={router.query.term}
          />
        <b className='cursor-pointer sm:mr-3 transition duration-100 transform hover:scale-125'
          onClick={() => { searchInputRef.current.value = "" }}
        >X</b>
        <Mic className=" mr-2 hidden sm:inline-flex text-blue-500 border-l-2 pl-1 border-gray-300 
        "/>
        <Search className='h-6 text-blue-500 hidden sm:inline-flex '/>
        <button hidden type="submit " onClick={search}>Search</button>


      </form>

      
      <Avatar src="/img/profile.jpg" className=" ml-auto cursor-pointer h-10 translate duration-150 transform 
       hover:scale-110 "/>
      </div>

      {/* Header Options   */}
      <HeaderOptions/>

    </header>

    
  )
}

export default Header