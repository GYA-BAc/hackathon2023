import React, { useState } from "react"

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
    return (
        <div className="gallery-item-wrapper">

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

    return (
        <section className={"gallery-section"} data-scroll-section>
            <div className="gallery">

                <div className="gallery-counter">
                    <span>{activeImage}</span>
                    <span className="divider"/>
                    <span>{images.length}</span>
                </div>

                {images.map((image, index) => 
                    <GalleryItem
                        key={image.src+index}
                        index={index}
                        {...image}
                        updateActiveImage={(index)=>setActiveImage(index+1)}
                    />
                )}
            </div>
        </section>
)}