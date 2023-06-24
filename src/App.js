import  React from 'react';
import { useState, useEffect } from 'react'
import colorfilter  from "./images/colorfilter.png";
import { BsGrid } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import messages  from "./images/messages.jpeg";
import notification  from "./images/notification.png";
import anima  from "./images/anima.png";
import image  from "./images/image1.jpg";
import task  from "./images/task.jpeg";
import members  from "./images/members.jpeg";
import { HiOutlineFilter } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import calender  from "./images/calender.jpeg";
import seen  from "./images/seen.jpeg";
import comments  from "./images/comments.png";
import comments14 from "./images/comments14.png";
import comment9 from "./images/comment9.png";
import comment2 from "./images/comment2.png";
import comments15 from "./images/comments15.png";
import bulb  from "./images/bulb.png";
import pen  from "./images/pen.jpeg";
import link  from "./images/link.jpeg";
import flower from "./images/flower.jpeg";
import pot from "./images/pot.jpeg";
import dog from "./images/dog.jpeg";
import screenshot from "./images/screenshot.jpeg";
import './App.css';

function App() {

  return (
    <>
    <div className='app-header'>
      <header>
      <img className='colorfilter' src={colorfilter} alt="" />
      <p className='header-p'>Project M.</p>
        <button type='button' className='header-btn'>Search for anything..</button>
        <img className='notification' src={notification} alt="" />
        <img className='anima' src={anima} alt="" />
        <img className='image1' src={image} alt="" />
      </header>
    </div>

    <div className='sidebar'>
    <a href="#home"><BsGrid className='bsgrid'/> Home</a>
  <a href="#messages"><img className='img' src={messages} alt="" />Messages</a>
  <a href="#tasks"> <img className='img' src={task} alt="" /> Tasks</a>
  <a href="#members"><img className='img' src={members} alt="" />Members</a>
  <a href="#settings"><IoSettingsOutline className='IoSettingsOutline'/>Settings</a>
  <i className='line-break'>   </i>
  <p className='sidebar-heading'>MY PROJECTS</p>
  <ul className='sidebar-ul'>
    <li className='box sidebar-li' style={{color:'#0D062D'}}><RxDotFilled className='li-RxDotFilled' style={{backgroundColor:'#7AC555' , color:'#7AC555'}}/>Mobile App <BiDotsHorizontalRounded className='li-BiDotsHorizontalRounded'/> </li>
    <li className='sidebar-li' style={{color:'#787486'}}><span><RxDotFilled className='li-RxDotFilled' style={{backgroundColor:'#FFA500' , color:'#FFA500'}}/></span>Website Redesign</li>
    <li className='sidebar-li' style={{color:'#787486'}}><span><RxDotFilled className='li-RxDotFilled' style={{backgroundColor:'#E4CCFD' , color:'#E4CCFD'}}/></span>Design System</li>
    <li className='sidebar-li' style={{color:'#787486'}}><span><RxDotFilled className='li-RxDotFilled' style={{backgroundColor:'#76A5EA' , color:'#76A5EA'}}/></span>Wireframes</li>
  </ul>

  <div>
      <span className='round-icon'><span className='round-icon2'></span><img className='bulb' src={bulb} alt="" /></span>
      <div className='rectangle-background'>
        <p className='rec-p-1'>Thoughts Time</p>
        <p className='rec-p-2'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
        <button className='rec-p-3'>Write a message</button>
      </div>

    </div>
    </div>
    <div>
      <h1 className='main-heading'>Mobile App</h1><span ><img src={pen} alt='' className='pen'></img> <img src={link} alt='' className='link'></img></span>
      <button type='button' className='main-btn1'><HiOutlineFilter className='HiOutlineFilter'/>Filter <BsChevronDown className='BsChevronDown'/></button>
      <button type='button' className='main-btn2'><img className='img2' src={calender} alt="" />Today<BsChevronDown className='BsChevronDown'/></button>
    </div>
    <section>
      <div className='card-todo' >
      <RxDotFilled className='RxDotFilled'/>
      <p className='card-header'>To Do</p>
      <span className='header-line' style={{borderColor:"#5030E5"}}></span>
      <div className='todo-card-1'>
<span className='low'>Low</span><BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
<p className='todo-heading'>Brainstorming</p>
<p className='todo-main'>Brainstorming brings team members' diverse experience into play. </p>
<img className='todo-seen' src={seen} alt="" />
<img className='todo-comments' src={comments} alt="" />
      </div>
      <div className='todo-card-2'>
      <span className='low'>High</span><BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
      <p className='todo-heading'>Research</p>
      <p className='todo-main'>User research helps you to create an optimal product for users. </p>
      </div>
      <div className='todo-card-3'>
      <span className='low'>High</span><BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
      <p className='todo-heading'>Wireframes</p>
      <p className='todo-main'>Low fidelity wireframes include the most basic content and visuals.</p>
      </div>
      </div>
      <div className='card-progress'>
      <p className='card-header'>On Progress</p>
      <RxDotFilled className='RxDotFilled' style={{backgroundColor:'#FFA500' , color:'#FFA500'}}/>
      
      <span className='header-line' style={{borderColor:"#FFA500"}}></span>
      <div className='progress-card-1'>
<span className='low'>Low</span><BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
<p className='todo-heading'>Onboarding Illustrations </p>
<img className='flower' src={flower} alt=''></img>
<img className='progress-comments' src={comments14} alt="" />
      </div>
      <div className='progress-card-2'>
      <span className='low'>Low</span><BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
      <p className='todo-heading'>Moodboard</p>
      <img className='pot' src={pot} alt="" />
      <img className='dog' src={dog} alt="" />
      <img className='progress-comment9' src={comment9} alt="" />
      </div>
      </div>
      <div className='card-done' >
      <RxDotFilled className='RxDotFilled' style={{backgroundColor:'#76A5EA' , color:'#76A5EA'}}/>
      <p className='card-header'>Done</p>
      <span className='header-line' style={{borderColor:"#8BC48A"}}></span>
      <div className='done-card-1'>
<span className='completed'>Completed</span><BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
<p className='todo-heading'>Mobile App Design</p>
<img className='screenshot' src={screenshot} alt="" />
<img className='done-commens15' src={comments15} alt="" />
      </div>
      <div className='done-card-2'>
      <span className='completed'>Completed</span><BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
      <p className='todo-heading' style={{display: 'inline', overflow:'visible', zIndex: '1',whiteSpace: 'nowrap'}}>Design System</p>
      <p className='done-main'>It just needs to adapt the UI from what you did before</p>
      <img className='done-comment2' src={comment2} alt="" />
      </div>
      </div>
    </section>
    </>
  );
}

export default App;
