import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PostList({messages}) {
    return (
      messages.map(message => {
          return <Message id={message.id} message={message}/>
      })
    )
}

export default function Posts() {
    const [posts, setPosts] =  useState([])
    const postRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("current") === null) {
          navigate('/signin')
          return
        }
        const storedPosts = JSON.parse(localStorage.getItem("posts"))
        if (storedPosts) setPosts(storedPosts)

    }, [])

    
    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts))
    }, [posts])


    function addPost(e) {
        const content = postRef.current.value;
        if (content === '') return
        setPosts(prevPost => {
          const ID = new Date()
          return [...prevPost, { id: ID.toString(), content: content, user: JSON.parse(localStorage.getItem("current")) }]
        })
        postRef.current.value = null
    }

    // function logoutCurrentUser(e) {
    //     localStorage.removeItem("current")
    //     navigate('/signin')
    // }

    return (
      <div style={{
        paddingTop: '150px',
        paddingLeft: '30px',
        justifyContent: 'Right',
        alignItems: 'Right',
        minHeight: '100vh'
      }}>
        <hr/>
        <MessageList messages={posts}/>
        <hr/>
        <input ref={postRef} type="text"/>
        <button onClick={addPost}>Send Message</button>
        <hr/><br/>
      </div>
    )
}