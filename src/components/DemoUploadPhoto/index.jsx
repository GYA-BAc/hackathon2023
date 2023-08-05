import React, { useState } from "react";
import * as tmImage from '@teachablemachine/image';
import UploadDialogue from "../DemoUploadDialogue";

import "./style.css"


export default function UploadPhoto() {

    const URL = "https://teachablemachine.withgoogle.com/models/fVe21QzxG/";
    let model, maxPredictions;
    let webcam

    // Load the image model and setup the webcam
    async function init() {
        // show dialogue box
        const dialogueBox = document.querySelector('.upload-dialogue-container');
        if (dialogueBox.getAttribute("hidden") === null) return
        dialogueBox.removeAttribute("hidden")
        
        const webcamContainer = document.getElementById("webcam-container")
        webcamContainer.removeAttribute("freeze")

        const predictionBox = document.querySelector('.prediction');
        predictionBox.innerHTML = "Looks like: "

        const suggestionBox = document.querySelector('.ai-suggestion')
        suggestionBox.innerHTML = ""

        const commentBox = document.querySelector(".comment")
        commentBox.value = ""

        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();


        try {
            const flip = true; // whether to flip the webcam
            webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
            await webcam.setup(); // request access to the webcam
            await webcam.play();
            window.requestAnimationFrame(loop);
            // append elements to the DOM
            document.getElementById("webcam-container").appendChild(webcam.canvas);
        } catch(e){
            console.log(e)
        }
    }

    async function loop() {
        const dialogueBox = document.querySelector('.upload-dialogue-container');
        const webcamContainer = document.getElementById("webcam-container")
        if (dialogueBox.getAttribute("hidden") !== null) {
            await webcam.stop()
            return
        }
        if (webcamContainer.getAttribute("freeze") !== null) {
            await webcam.stop()
            return
        }
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // predict can take in an image, video or canvas html element
        let prediction = await model.predict(webcam.canvas);
        const predictionBox = document.querySelector('.prediction');
        predictionBox.innerHTML = prediction.sort((i, j)=>{
            return (i.probability >= j.probability) ? i.className : j.className
        })[2].className
        }

            

    return (
        <>
            <UploadDialogue/>
            <img className="upload-button" onClick={init} src="/favicon.ico"/>
        </>
    )
}