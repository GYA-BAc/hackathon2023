import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import "./style.css"


export default function Posts() {

  return (
      <div className="post-container">

        <div className="post">
          <img src="/assets/turtle.png" className="pfp"/>  
          <h3 className='text'>@AdminTurtle</h3>        
          <h4>Welcome everyone! I encourage you to post any pictures of recycling you have!</h4>
        </div>

        <div className="post">
          <img src="/assets/turtle.png" className="pfp"/>  
          <h3 className='text'>@AdminTurtle</h3>        
          <h4 className='text'>Oh, and posts will be moderated. No hateful comments please!</h4>

        </div>

      </div>
    )
}