import Header from '@/components/share/header'
import React, { use } from 'react';
import {transformationTypes} from '@/constants'
import TransformationForm from '@/components/share/TransformationForm';
import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AddTransformationType = async ({params:{type}}: SearchParamProps) => {
  const {userId} = auth();
  const transformation = transformationTypes[type];
  if(!userId) redirect('/sign-in');

    // const user = await getUserById(userId); 
 
  const user ={
    _id : "abc",
    creditBalance:10
  }
  return (
    <>
      <Header
       title={transformation.title}
       subtitle={transformation.subTitle}
      />
      <section className='mt-10'>
      <TransformationForm
       action='Add'
       userId={user._id}
       type={transformation.type as TransformationTypeKey}
       creditBalance={user.creditBalance}
      />
      </section>
    </>
  )
}

export default AddTransformationType
