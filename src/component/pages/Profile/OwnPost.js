import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUserPost } from '../../../actions';
import NewPost from '../Newsfeed/NewPost/NewPost';
import Post from '../Newsfeed/Post/Post';

const OwnPost = () => {
   const userPost = useSelector(state => state.userPost);
   const user = useSelector(state => state.user);
   const dispatch = useDispatch();
   useEffect(() => {
      fetch(`https://social-server-01.herokuapp.com/userposts/${user.email}`)
         .then(res => res.json())
         .then(data => dispatch(setUserPost(data)))
   }, [userPost])
   const images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZS2DZqyMuxmhZ-HZ8gX7kMGL0qJMKnQhXQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsugtuTfilGyAJSbqMxOMl2NnpxZUGnG_UA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsugtuTfilGyAJSbqMxOMl2NnpxZUGnG_UA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsugtuTfilGyAJSbqMxOMl2NnpxZUGnG_UA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsugtuTfilGyAJSbqMxOMl2NnpxZUGnG_UA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsugtuTfilGyAJSbqMxOMl2NnpxZUGnG_UA&usqp=CAU']
   return (
      <div>
         <div className="row mt-3">
            <div className="col-1"></div>
            <div className="col-8 pe-4">
               <NewPost></NewPost>
               {
                  userPost.map(p => <Post key={p._id} post={p}></Post>)
               }
            </div>
            <div className="col-3">
               <div className='border border-3 px-1 pb-2'>
                  <h3 className='border-3 border-bottom py-2'>About</h3>
                  <div>
                     <p><u><b>About me:</b></u> {user.about}</p>
                     <p><u><b>Date Of Birth:</b></u> 02 May 2001</p>
                     <p><u><b>Occupation:</b></u> {user.occupation}</p>
                     <p><u><b>Email:</b></u> {user.email}</p>
                  </div>
               </div>
               <div className='row g-1 border border-3 px-1 pb-2 mt-4'>
                  <h4 className='border-3 border-bottom pb-2'>Recently uploaded</h4>
                  {
                     images.slice(0, 9).map(i => <div className='col-4'><img width={'100%'} height={'100%'} src={i} alt="" /></div>)
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default OwnPost;