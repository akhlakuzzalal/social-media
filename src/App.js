import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './component/pages/Calender/Calender';
import LogIn from './component/pages/Login/LogIn';
import News from './component/pages/Newsfeed/News/News';
import NotFound from './component/pages/NotFount/NotFound';
import Profile from './component/pages/Profile/Profile';
import Weather from './component/pages/Weather/Weather';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Header from './component/shared/Header/Header';
import LeftSideBar from './component/shared/SideBar/LeftSideBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <><Header></Header>
          <LeftSideBar></LeftSideBar>
          <Routes>
            <Route exact path='/feed' element={<PrivateRoute><News /></PrivateRoute>}></Route>
            <Route exact path='/' element={<PrivateRoute><News /></PrivateRoute>}></Route>
            <Route exact path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
            <Route exact path='/calender' element={<Calender></Calender>}></Route>
            <Route exact path='/weather' element={<Weather></Weather>}></Route>
            <Route exact path='/login' element={<LogIn></LogIn>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes></>
      </BrowserRouter>
    </div >
  );
}

export default App;
