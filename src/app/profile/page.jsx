"use client";
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import { redirect } from 'next/navigation';


const ProfilePage = () => {
    const userData = authClient.useSession()
      const user = userData.data?.user
    //   console.log(user)
 
    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center shadow-2xl mt-5 rounded-2xl'>
                      <Avatar className='h-20 w-20'>
                        <Avatar.Image alt="kaniz sanjila" src={user?.image} referrerPolicy="no-referrer"/>
                        <Avatar.Fallback>k</Avatar.Fallback>
                        {user?.name.charAt(0)}
                      </Avatar>
                      <h2 className='text-xl font-bold'>{user?.name}</h2>
                      <p className='text-muted'
                      >{user?.email}</p>
            <UpdateUserModal></UpdateUserModal>
            </Card> 
        </div>
    );
};

export default ProfilePage;