import React from 'react'
import { useEffect } from 'react';


function Fag() {
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
        const elements = document.querySelectorAll('.box');
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
                <div className="d-flex justify-content-space-between box p-3">
                    <h4>WHAT IS Y INNOVATION?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="d-flex justify-content-space-between box p-3">
                    <h4>WHEN IS THE OFFICIAL LAUNCH ?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="d-flex justify-content-space-between box p-3">
                    <h4>WHY SHOULD WE BUY Y INNOVATION ?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="d-flex justify-content-space-between box p-3">
                    <h4>HOW THE LIVE CHART WORKS IN TELEGRAM ?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="d-flex justify-content-space-between box p-3">
                    <h4>HOW SECURE IS THIS Y INNOVATION ?</h4>
                    <p></p>
                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="d-flex justify-content-space-between box p-3">
                <h4>WHY THE NAME IS Y INNOVATION ?</h4>
                <p></p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Fag