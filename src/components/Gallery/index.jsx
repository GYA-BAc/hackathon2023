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
                  <div className="picture-container">
                    <img className="picture" src="/assets/AL.png"/>
                  </div>
                  <p className="title">Alan Ji - Lead Developer</p>
                  <p className="subtitle">add links here</p>
                </div>

                <div className="sample-card">
                  <div className="picture-container">
                    <img className="picture" src="/assets/KN1.jpg"/>
                  </div>
                  <p className="title">Kennedi Stewart - Team Lead</p>
                  <p className="subtitle">Kvmarie12@gmail.com</p>
                </div>

                <div className="sample-card">
                  <div className="picture-container">
                    <img className="picture" src="/assets/KN2.jpeg"/>
                  </div>
                  <p className="title">Kennedy Jefferson - Artist/AI-trainer</p>
                  <p className="subtitle">kennedysjefferson@outlook.com</p>
                </div>

                <div className="sample-card">
                  <div className="picture-container">
                    <img className="picture" src="/assets/NM.jpeg"/>
                  </div>
                  <p className="title">Naomi - Lead Artist/Designer</p>
                  <p className="subtitle">leverettenaomi@gmail.com</p>
                </div>

              </section>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}