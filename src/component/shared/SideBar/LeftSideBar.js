import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNewspaperFill } from 'react-icons/ri';
import './sideBar.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pageHolder } from '../../../actions';
import { useSelector } from 'react-redux';

const LeftSideBar = () => {
   const user = useSelector(state => state.user)
   const dispatch = useDispatch();
   return (
      <div className='barContainer pt-3'>
         {
            user.email ? <>
               < AiOutlineMenu className='sideBar-logo ms-2' />
               <Link to='/profile' onClick={() => dispatch(pageHolder('Profile'))}>< CgProfile className='sideBar-logo ms-2' /></Link>
               <Link to='/feed' onClick={() => dispatch(pageHolder('NewsFeed'))}>< RiNewspaperFill className='sideBar-logo ms-2' /></Link>
               <Link to='/calender' onClick={() => dispatch(pageHolder('Calender'))}>< BsFillCalendarDateFill className='sideBar-logo ms-2' /></Link>
               <Link to='/weather' onClick={() => dispatch(pageHolder('Weather'))}>< TiWeatherPartlySunny className='sideBar-logo ms-2' /></Link>
            </> : <></>
         }
      </div>
   );
};

export default LeftSideBar;