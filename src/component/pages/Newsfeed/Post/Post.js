import React, { useEffect, useState } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPost } from '../../../../actions';


const Post = ({ post }) => {
   const { postText, postUser, email } = post;
   const dispatch = useDispatch();
   const [deletePOst, setDeletePost] = useState(false)
   const user = useSelector(state => state.user)
   const { photoURL, name } = postUser;
   const deletePost = (id) => {
      if (user.email === post.email) {
         fetch(`https://social-server-01.herokuapp.com/posts/${id}`, {
            method: "DELETE"
         })
            .then(res => res.json())
            .then(data => {
               if (data.deletedCount === 1) {
                  setDeletePost(true)
               }
            })
      }
      setDeletePost(false)
   }
   useEffect(() => {
      fetch('https://social-server-01.herokuapp.com/posts')
         .then(res => res.json())
         .then(data => dispatch(setPost(data)))

   }, [deletePost])
   return (
      <div className='pt-3 pb-1 px-4 shadaw my-4 '>
         <div className='border-3 border-bottom'>
            <div className='d-flex justify-content-between'>
               <div className='d-flex align-items-center'>
                  <img width={'45px'} height={'45px'} className='rounded-circle' src={photoURL} alt="" />
                  <div className='ms-3'>
                     <p className='m-0 p-0 line-height-0'>{name}</p>
                     <p className='m-0 p-0 line-height-0'>March 4 at 2:05pm</p>
                  </div>
               </div>
               <div>

                  <OverlayTrigger
                     trigger="click"
                     key={'bottom'}
                     placement={'bottom'}
                     overlay={
                        <Popover id={`popover-positioned-${'bottom'}`}>
                           <Popover.Body>
                              {
                                 user.email === email ?
                                    <><Button onClick={() => deletePost(post._id)} variant='danger'>Delete</Button></>
                                    :
                                    <><h6>Another User post</h6></>
                              }
                           </Popover.Body>
                        </Popover>
                     }
                  >
                     <Button className='bg-white border-0'><BsThreeDots style={{ color: 'black' }} /></Button>
                  </OverlayTrigger>
               </div>
            </div>
            <div className='mt-4'>
               <p>{postText}</p>
            </div>
         </div>
         <div className='row mt-3'>
            <p className="col-4 text-center line-height-0 post-option"> <span>Like</span></p>
            <p className="col-4 text-center line-height-0 post-option">Comment</p>
            <p className="col-4 text-center line-height-0 post-option">Share</p>
         </div>
      </div>
   );
};

export default Post;