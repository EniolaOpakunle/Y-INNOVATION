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
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">WHAT IS Y INNOVATION?</button>
                    <div class="collapse px-2" id="collapseExample1">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3 ">
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">why should we buy Y INNOVATION?</button>
                    <div class="collapse px-2" id="collapseExample2">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3">
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">what is the official launch?</button>
                    <div class="collapse px-2" id="collapseExample3">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3">
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">how the live chat works in telegram ?</button>
                    <div class="collapse px-2" id="collapseExample4">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3">
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample"> how secure is this Y INNOVATION?</button>
                    <div class="collapse px-2" id="collapseExample5">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>

                </div>
            </div>
            <div className='col-lg-6 py-2'>
                <div className="box box1 p-3">
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">why is the name y innovation?</button>
                    <div class="collapse px-2" id="collapseExample6">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Fag