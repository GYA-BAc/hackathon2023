import React, { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import cn from "classnames"
import useOnScreen from "../../hooks/useOnScreen"

import "./style.css"


const images = [
    {
        src: 
            "/assets/Placeholder.jpg",
        title: "Image 1",
        subtitle1: "Lorem Ipsum1",
        subtitle2: "Lorem Ipsum2"
    },

    {
        src: 
            "/assets/Placeholder.jpg",
        title: "Image 2",
        subtitle1: "Lorem Ipsum1",
        subtitle2: "Lorem Ipsum2"
    },

    {
        src: 
            "/assets/Placeholder.jpg",
        title: "Image 3",
        subtitle1: "Lorem Ipsum1",
        subtitle2: "Lorem Ipsum2"
    },

    {
        src: 
            "/assets/Placeholder.jpg",
        title: "Image 4",
        subtitle1: "Lorem Ipsum1",
        subtitle2: "Lorem Ipsum2"
    },
]


function GalleryItem({src, subtitle1, subtitle2, title, updateActiveImage, index}) {
    const ref = useRef(null)
    const onScreen = useOnScreen(ref, 0.9)

    useEffect(() => {
        if (onScreen) {
            updateActiveImage(index)
        }
    }, [onScreen, index])

    
    return (
        <div className={cn("gallery-item-wrapper", {"is-reveal" : onScreen})}
        //<div className="gallery-item-wrapper"
            ref={ref}
        >

            <div/>

            <div className="gallery-item">
                <div className="gallery-info">
                    <h1 className="info-title">{title}</h1>
                    <h6 className="info-subtitle1">{subtitle1}</h6>
                    <p className="info-subtitle2">{subtitle2}</p>
                </div>

                <div 
                    className="gallery-image"
                     style={{backgroundImage: `url(${src})`}}
                ></div>

            <div/>

            </div>
        </div>
    )
}


export default function Gallery() {

    const [activeImage, setActiveImage] = useState(1)
    const ref = useRef(null);

    useEffect(() => {

            const sections = gsap.utils.toArray('.gallery-item-wrapper')
            gsap.to(sections, {
                xPercent: -100 * (sections.length-1),
                ease: "none",
                scrollTrigger: {
                    start: "top top",
                    trigger: ref.current,
                    scroll: "#main-container",
                    pin: true,
                    scrub: true,
                    snap: 1/(sections.length-1),
                    end: () => `+=${ref.current.offsetWidth}`
                },
            })
            ScrollTrigger.refresh()
    }, [])

    return (
        <section className={"gallery-section"} data-scroll-section>
            <div className="gallery" ref={ref}>

                <div className="gallery-counter">
                    <span>{activeImage}</span>
                    <span className="divider"/>
                    <span>{images.length}</span>
                </div>

                {images.map((image, index) => 
                    <GalleryItem
                        key={image.src}
                        index={index}
                        {...image}
                        updateActiveImage={(index)=>setActiveImage(index+1)}
                    />
                )}
            </div>
        </section>
)}