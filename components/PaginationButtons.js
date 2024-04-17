import { ArrowBack, ArrowRight } from '@material-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'


const PaginationButtons = () => {

    const router = useRouter();
    const startIndex = Number(router.query.start) || 0; 

  return (
    <div className='flex justify-between max-w-lg text-blue-700 mb-10'>
        {startIndex >= 10 && (
            <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
            <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline '>
                <ArrowBack className=''/>
                <p>Previous</p>
            </div>
            </Link>
        )}
        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
            <ArrowRight className=''/>
            <p>Next</p>
        </div>
        </Link>
    </div>
  )
}

export default PaginationButtons