import React from 'react';
import { Button } from '@material-ui/core'; // Example import
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Navigation from './Components/Navigation';
// import TextBoxComponent from './component/TextBoxComponent';
// import Car from './component/Carinfo';
// import Sum from './component/Sum';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import Demoaxios from './Components/Demoaxios';
import ShowCourses from './Components/ShowCourses';
import Timetable from './Components/TimeTable';
import Footer from './Components/Footer';


function App() {
  
  return(
    <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" style={{ width:"40px", height:"40px" }} />&nbsp;
          <p>ONLINE TIME TABLE MANAGEMENT SYSTEM </p>
        </div >
        {/* <div align="center">
          <Car myLists={Cars}/>
        </div> */}
        <div className="App-body">
          <Container>
            
            <Navigation />&nbsp;&nbsp;&nbsp;
            {/* <TextBoxComponent /> */}
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/reg' element={<Registration />} />
               {<Route path='/add' element={<addCourse/>}/> }
                {/* <Route path='/blo' element={<Blog/>}/> */}
                {/* <Route path='/logo' element={<Logout/>}/> */}
                {/* { <Route path='/pri' element={<User/>}/> } */}
                {/* <Route path='/acco' element={<AccountPage/>}/> */}
                { <Route path='/dash' element={<courseDb/>}/> }
                <Route path='/dem' element={<Demoaxios/>}/> 
                <Route path='/cou' element={<ShowCourses/>}/>
                <Route path='/tim' element={<Timetable/>}/>
              </Routes>
            </BrowserRouter>
          </Container>
        </div>
        
      <Footer/>
    </div>
  );
}

export default App;