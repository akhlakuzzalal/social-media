import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCamera, AiFillTag } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { useSelector } from 'react-redux';

const NewPost = () => {
   const user = useSelector(state => state.user)
   const { register, handleSubmit, reset } = useForm();
   const submit = (data) => {
      const postData = { postText: data.postText, postUser: user, email: user.email }
      fetch('https://social-server-01.herokuapp.com/newpost', {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(postData)
      })
         .then(res => res.json())
         .then(dta => {
            if (dta.insertedId) {
               reset();
            }
         })
   }
   return (
      <div className='border border-2 rounded px-3 pt-2'>
         <h3>Create a post</h3>
         <form onSubmit={handleSubmit(submit)}>
            <textarea {...register('postText')} className='border-3 border-bottom' style={{ width: '100%' }} cols="30" rows="5" placeholder='Whtas on ypur mind' />
            <div className='d-flex justify-content-between mt-2'>
               <div className='d-flex'>
                  <AiFillCamera className='sideBar-logo ms-4' />
                  <AiFillTag className='sideBar-logo ms-4' />
                  <GoLocation className='sideBar-logo ms-4' />
               </div>
               <div>
                  <input className='btn btn-success' type="submit" value={'Post'} />
               </div>
            </div>
         </form>
      </div>
   );
};

export default NewPost;