import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiTwotoneEdit } from 'react-icons/ai'
import OwnPost from './OwnPost';
import { setUser } from '../../../actions'
import { Button, Modal } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';

const Profile = () => {
   const user = useSelector(state => state.user);
   const dispatch = useDispatch();
   const refarence = useRef(null);
   const loading = useSelector(state => state.loading);
   const [modalShow, setModalShow] = useState(false);
   const [update, setUpdate] = useState(false);
   const [startDate, setStartDate] = useState(new Date());
   const { register, handleSubmit } = useForm();
   const Submit = data => {
      const updateData = { email: user.email, about: data.aboutMe, birthday: startDate, occupation: data.occupassion };
      fetch('https://social-server-01.herokuapp.com/user', {
         method: 'PUT',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(updateData)
      })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount === 1) {
               setUpdate(true);
            }
         })
      setModalShow(false)
   };
   useEffect(() => {
      fetch(`https://social-server-01.herokuapp.com/user/${user.email}`)
         .then(res => res.json())
         .then(data => dispatch(setUser(data)))
      setUpdate(false)
   }, [user.email, update]);

   // photo
   const setPhoto = (data) => {
      console.log(data.photo)
   }
   return (
      <div className='profile mx-auto'>
         {
            loading ?
               <> Please wait</>
               :
               <>
                  <img className='cover-photo' src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg" alt="" />
                  <div className='d-flex'>
                     <img className='profilePicture' src={user.photoURL} alt="" />
                     <div className='ms-4 mt-2'><h2 className='fw-bold'>{user.name}</h2><h5>0 Connections</h5></div>
                     <div className='ms-5 mt-4'><AiTwotoneEdit className='fs-2 edit' onClick={() => setModalShow(true)} /></div>
                     <div className='ms-5 mt-4'>
                        <form onChange={handleSubmit(setPhoto)}>
                           <input onChange={(event) => console.log(event.target.files)} ref={refarence} {...register('photo')} type="file" />
                           {/* <button onClick={() => refarence.current.click()}>UpLoad</button> */}
                        </form>
                     </div>
                  </div>
                  <OwnPost></OwnPost>

                  {/* Modal for update profile */}

                  <Modal
                     show={modalShow}
                     size="lg"
                     aria-labelledby="contained-modal-title-vcenter"
                     centered
                  >
                     <form onSubmit={handleSubmit(Submit)}>
                        <Modal.Header closeButton>
                           <Modal.Title id="contained-modal-title-vcenter">
                              Edit your Profile
                           </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           <div className='form-item'>
                              <h6>About You</h6>
                              <textarea defaultValue={user.about} {...register("aboutMe")} rows={2} cols={40} className='border border-2 py-1 ps-2' type="text" placeholder='Write about Yourself' />
                           </div>
                           <div className='form-item'>
                              <h6>Date Of Birth</h6>
                              <ReactDatePicker className='border border-2 py-1 ps-2 w-100' selected={startDate} onChange={(date) => setStartDate(date)} />
                           </div>
                           <div className='form-item'>
                              <h6>Occupassion</h6>
                              <input defaultValue={user.occupation} className='border border-2 py-1 ps-2 w-100' placeholder='Your Occupassion' {...register("occupassion")} />
                           </div>
                        </Modal.Body>
                        <Modal.Footer>
                           <Button onClick={() => setModalShow(false)}>Close</Button>
                           <input className='btn btn-success' type="submit" />
                        </Modal.Footer>
                     </form>
                  </Modal>
               </>
         }
      </div >
   );
};

export default Profile;