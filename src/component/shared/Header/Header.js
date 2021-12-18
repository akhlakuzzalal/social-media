import React from 'react';
import { RiBarChart2Fill, RiRadioButtonLine } from 'react-icons/ri'
import { BsSearch, BsFillChatFill } from 'react-icons/bs'
import { AiFillNotification, AiOutlineLogout } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import './header.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pageHolder } from '../../../actions';
import useFirebase from '../../../Firebase/useFirebase';
const Header = () => {
   const { logOut } = useFirebase()
   const pageHolderName = useSelector(state => state.PageName);
   const user = useSelector(state => state.user);
   const dispatch = useDispatch();
   return (
      <>
         {
            user.email ?
               <>
                  <div className='d-flex justify-content-between header-style' style={{ height: '60px', backgroundColor: '#3f4257' }}>
                     <div className='d-flex'>
                        <RiBarChart2Fill className='p-1' style={{ backgroundColor: '#ff5e3a', width: '60px', height: '100%', display: 'inline-block' }} />
                        <div className='pageName d-flex align-items-center justify-conteny-center px-4'>
                           <h3 className='text-light fw-bold'>{pageHolderName}</h3>
                        </div>
                        <div className='searchBar'>
                           <input className='ps-3 text-dark' type="text" placeholder='Search here' /><BsSearch className='searchIcon' style={{ width: '30px', paddingRight: '10px', height: '30px' }} />
                        </div>
                     </div>
                     <div className='d-flex align-items-center justify-content-center pe-5'>
                        <div>
                           <BsFillChatFill className='icons' />
                           <FaUserFriends className='icons' />
                           <AiFillNotification className='icons' />
                        </div>
                        <div className='headerNotification'>
                           <img className='rounded-circle' height={'30px'} width={'30px'} src={user?.photoURL} alt="" />
                           <p className='text-light text-center mx-3 mb-0 fw-bold'>{user.name}</p>
                           <DropdownButton variant='secondary'>
                              <Dropdown.Item as={Link} to='/profile' onClick={() => dispatch(pageHolder('Profile'))}>Profile <CgProfile /></Dropdown.Item>
                              <Dropdown.Item>Online <RiRadioButtonLine style={{ color: 'green' }} /></Dropdown.Item>
                              <Dropdown.Item>Disconected <RiRadioButtonLine style={{ color: 'red' }} /></Dropdown.Item>
                              <Dropdown.Item onClick={() => logOut()}>LogOut <AiOutlineLogout /></Dropdown.Item>
                           </DropdownButton>
                        </div>
                     </div>
                  </div>
               </> :
               <>
                  <div className='d-flex justify-content-between header-style' style={{ height: '60px', backgroundColor: '#3f4257' }}>
                     <div className='d-flex'>
                        <RiBarChart2Fill className='p-1' style={{ backgroundColor: '#ff5e3a', width: '60px', height: '100%', display: 'inline-block' }} />
                        <div className='pageName d-flex align-items-center justify-conteny-center px-4'>
                           <h3 className='text-light fw-bold'>Please Login First</h3>
                        </div>
                     </div>
                  </div>
               </>
         }
      </>
   );
};

export default Header;