import React, { useRef, useState, useEffect } from "react"

import "./style.css"



export default function Gallery() {

  useEffect (() => {

    const spaceHolder = document.querySelector('.space-holder');
    const horizontal = document.querySelector('.horizontal');

    console.log(spaceHolder)
    console.log(horizontal)
    
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    
    function calcDynamicHeight(ref) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const objectWidth = ref.scrollWidth;
      return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
    }

    const sticky = document.querySelector('.sticky');

    window.addEventListener('scroll', () => {
      horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    });

    window.addEventListener('resize', () => {
      spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    });
  }, [])


  return (
    <>
      <section class="container">
        <div class="space-holder">
          <div class="sticky">
            <div class="horizontal">
              <section role="feed" class="cards">
                <article class="sample-card"></article>
                <article class="sample-card"></article>
                <article class="sample-card"></article>
                <article class="sample-card"></article>
                <article class="sample-card"></article>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}