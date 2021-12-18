import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setPost, setUser } from '../../../../actions';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';

const News = () => {
   const dispatch = useDispatch();
   const posts = useSelector(state => state.NewsFeed)
   const user = useSelector(state => state.user)
   useEffect(() => {
      fetch(`https://social-server-01.herokuapp.com/user/${user.email}`)
         .then(res => res.json())
         .then(data => dispatch(setUser(data)))
   }, [user.email])
   useEffect(() => {
      fetch('https://social-server-01.herokuapp.com/posts')
         .then(res => res.json())
         .then(data => dispatch(setPost(data)))
   }, [])
   return (
      <div className='App'>
         <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
               <NewPost></NewPost>
               {
                  posts.map(p => <Post post={p} key={p._id}></Post>)
               }
            </div>
            <div className="col-3"></div>
         </div>
      </div>
   );
};

export default News;