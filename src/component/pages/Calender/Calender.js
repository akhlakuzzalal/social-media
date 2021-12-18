import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
   return (
      <div className='App'>
         <h2 className='text-center'>Calender</h2>
         <Calendar className='w-75 h-100 mx-auto' />
      </div>
   );
};

export default Calender;