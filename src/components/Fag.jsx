import React from 'react'
import { useEffect } from 'react';
import {useState} from 'react'
import arrow from '../assets/images/arrow.png'


function Fag({hand}) {
        const [toggle ,Settoogle]= useState(false)
        const togglebtn =()=>{
          Settoogle(prev=> !prev)
          console.log(20)
        }
        const [toggle1 ,Settoogle1]= useState(false)
        const togglebtn1 =()=>{
          Settoogle1(prev=> !prev)
          console.log(20)
        }
        const [toggle2 ,Settoogle2]= useState(false)
        const togglebtn2 =()=>{
          Settoogle2(prev=> !prev)
          console.log(20)
        }
        const [toggle3 ,Settoogle3]= useState(false)
        const togglebtn3 =()=>{
          Settoogle3(prev=> !prev)
          console.log(20)
        }
        const [toggle4 ,Settoogle4]= useState(false)
        const togglebtn4 =()=>{
          Settoogle4(prev=> !prev)
          console.log(20)
        }
        const [toggle5 ,Settoogle5]= useState(false)
        const togglebtn5 =()=>{
          Settoogle5(prev=> !prev)
          console.log(20)
        }



    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
          }
        });
    }
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
          root: null, // Use the viewport as the root
          rootMargin: '0px', // No margin
          threshold: 0.2, // Trigger when 20% of the element is visible
        });
    
        // Find all elements with the class "box" and observe them
        const elements = document.querySelectorAll('.box1');
        elements.forEach((element) => {
          observer.observe(element);
        });
    
        return () => {
          // Clean up the observer when the component unmounts
          elements.forEach((element) => {
            observer.unobserve(element);
          });
        };
      }, []);
    
  return (
  <div className='fag text-light' id='fag'>
    <div className='size'>
        <p className='text-center title1'>FREQUENTLY ASKED QUESTIONS</p>
        <h1 className='text-center title2'>QUESTIONS AND ANSWERS</h1>
        <div className='row mt-5 '>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3">
                    <button class="btn"  data-bs-target="#collapseExample1"  onClick={togglebtn}  > <span   className={toggle?"yes":""}                         > WHAT IS Y INNOVATION?</span> </button>
                    {
                      toggle && <div className=" px-2" id="collapseExample1">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                    
                      

                    }

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3 ">
                    <button className="btn" type="button" aria-expanded="false"onClick={togglebtn1}    aria-controls="collapseExample">  <span className={toggle1?"yes":""}  >  why should we buy Y INNOVATION?</span> </button>

                    {
                      toggle1 &&

                    <div className=" px-2">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                    }

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3">
                    <button className="btn" onClick={togglebtn5}> <span  className={toggle5?"yes":""}>
                      what is the official launch?
                      </span> 
                      </button>

                    {
                      toggle5&&
                    <div class=" px-2" id="collapseExample3">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                    }

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3">
                    <button className="btn" type="button" onClick={togglebtn2}  >
                      <span className={toggle2?"yes":""}>

                      how the live chat works in telegram ?
                      </span>
                      
                      </button>
                    {
                      toggle2 &&
                    <div className=" px-2" id="collax`pseExample4">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                    }

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3">
                    <button class="btn" type="button" aria-controls="collapseExample" onClick={togglebtn3} > 
                     <span className={toggle3?"yes":""}>

                    how secure is this Y INNOVATION?
                     </span>
                    </button>

                    {
                      toggle3 &&
                    <div class=" px-2" id="collapseExample5">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                    }

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3">
                    <button class="btn" type="button"aria-controls="collapseExample" onClick={togglebtn4} >
                      <span  className={toggle4?"yes":""}>

                      why is the name y innovation?
                      </span>
                      
                      </button>

                    {
                      toggle4 &&
                    <div class=" px-2" id="collapseExample6">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                    }

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Fag