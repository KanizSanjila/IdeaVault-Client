import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='w-1/3 mx-auto mt-20 border-none p-10 border-bs-indigo-200 shadow-2xl rounded-2xl text-center'>
          <h2 className='text-3xl pb-2'>This Page Is Not Found</h2> 
          <Button variant="secondary"><Link href={'/'}>BACK TO HOME</Link></Button> 
        </div>
    );
};

export default NotFoundPage;