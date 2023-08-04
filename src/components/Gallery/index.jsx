import React, { useEffect } from "react"

import "./style.css"


function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

export default function Gallery() {

  useEffect (() => {

      const spaceHolder = document.querySelector('.space-holder');
      const horizontal = document.querySelector('.horizontal');

      spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
      
      const sticky = document.querySelector('.sticky');

      window.addEventListener('scroll', () => {
        horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
      });

      window.addEventListener('resize', () => {
        spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
      });
  }, [])
  

  return (
    <div className="gallery-section">
      <h1 className="heading" style={{textAlign:"center",fontSize:"50px"}}>Meet The Team</h1>
      <section className="container" data-scroll-section>
        <div className="space-holder">
          <div className="sticky">
            <div className="horizontal">
              <section role="feed" className="cards">
                <div className="sample-card">
                  <p className="title">Alan Ji - role</p>
                  <p className="subtitle">add links here</p>
                </div>
                <div className="sample-card">
                  <p className="title">Name 2 - role</p>
                  <p className="subtitle">add links here</p>
                </div>
                <div className="sample-card">
                  <p className="title">Name 3 - role</p>
                  <p className="subtitle">add links here</p>
                </div>
                <div className="sample-card">
                  <p className="title">Name 4 - role</p>
                  <p className="subtitle">add links here</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}