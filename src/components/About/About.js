import React from 'react';
import "./About.css";
import  myNameIs from"./giphy.gif";
import tech from "./technolgoy.gif"


export default function About(){
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entery) =>{
            if(entery.isIntersecting){
                entery.target.classList.add('show');
            }else{
                entery.target.classList.remove('show');
            }
        });
    });
    const hiddenElemetns = document.querySelectorAll('.hidden');
    hiddenElemetns.forEach((el) => observer.observe(el));

    return(
        <div id="m">
         <img className='hidden' src={myNameIs} id='about'></img>
         <h1 id="hi"className='hidden'>Shane</h1>
         <h1 id="student" className='hidden'>I am Currently a Student at College of the Sequoias Studying Computer Science</h1>
         <img className='hidden' src="https://www.cos.edu/en-us/Facilities/PublishingImages/Facilities-Home-Welcome-Full.jpg" alt = "Campus Image"></img>
         <h1 id="passionate" className='hidden'>And I am Verry Passionate About Technology</h1>
         <img id="tech" className='hidden' src = {tech}></img>
      </div>
    )
}