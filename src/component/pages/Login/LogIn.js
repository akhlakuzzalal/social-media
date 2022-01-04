import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setLoading, setUser } from '../../../actions';
import useFirebase from '../../../Firebase/useFirebase'

const LogIn = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const loading = useSelector(state => state.loading);
   const user = useSelector(state => state.user);
   const location = useLocation();
   const { googleSignIn } = useFirebase();
   const redirect_url = location.state?.from?.pathname;
   const handleLogIn = () => {
      googleSignIn()
         .then((result) => {
            dispatch(setUser((result.user)))
            const userData = { email: result.user.email, name: result.user.displayName, photoURL: result.user.photoURL }
            fetch('https://social-server-01.herokuapp.com/user', {
               method: 'PUT',
               headers: {
                  "content-type": "application/json"
               },
               body: JSON.stringify(userData)
            })
               .then(res => res.json())
               .then(data => console.log(data))

            navigate(redirect_url)
         })
         .catch((error) => {
            console.log(error.message)
         })
         .finally(() => {
            dispatch(setLoading(false))
         })

   }
   return (
      <div className='login'>
         {
            loading ? <><h2>Loading........</h2></>
               :
               <>
                  {
                     user.email ? <>{navigate(redirect_url)}</> : <><button onClick={handleLogIn} className='btn btn-success'>Google LogIn</button></>
                  }
               </>
         }
      </div>
   );
};

export default LogIn;