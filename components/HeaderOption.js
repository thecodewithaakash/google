import React from 'react'

const HeaderOption = ({Icons,title,selected}) => {
  return (
    <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500
    pb-3 `}>
        <Icons className=""/>
       <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption