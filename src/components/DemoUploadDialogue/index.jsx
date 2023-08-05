import { React, useState } from "react";
import { Configuration, OpenAIApi } from "openai"

import "./style.css"

const API_KEY = "GETYOUROWNKEY"


export default function UploadDialogue() {

    const [shareable, setShareable] = useState(false)

    let configuration = new Configuration({ apiKey: API_KEY,});

    // Delete it
    delete configuration.baseOptions.headers['User-Agent'];

    
    const openai = new OpenAIApi(configuration);
    const [prompt, setPrompt] = useState("");
    const [apiResponse, setApiResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
      setLoading(true);
      try {
        const result = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          temperature: 0.3,
          max_tokens: 500,
        });
        //console.log("response", result.data.choices[0].text);
        setApiResponse(result.data.choices[0].text);
      } catch (e) {
        //console.log(e);
        setApiResponse("Something is going wrong, Please try again.");
      }
      setLoading(false);
    };

    async function getInfo() {
        const dialogueBox = document.querySelector('.upload-dialogue-container');
        const webcamContainer = document.getElementById("webcam-container")
        webcamContainer.setAttribute("freeze", "true")
        
        const predictionBox = document.querySelector('.prediction')
        const suggestionBox = document.querySelector('.ai-suggestion')
        try {
        const category = predictionBox.innerHTML

        setPrompt("What are 3 ways to recycle" + category + "waste?")
        await handleSubmit()
        while (loading) {
            //console.log("loading")
        }
        //console.log(apiResponse)
        suggestionBox.innerHTML = apiResponse

        setShareable(true)

        } catch(e) {
            console.log(e)
            dialogueBox.setAttribute("hidden", "true")
        }
    }

    function cancel() {
        const dialogueBox = document.querySelector('.upload-dialogue-container');
        dialogueBox.setAttribute("hidden", "true")
        document.getElementById("webcam-container").innerHTML = ""
        cleanup()
    }

    function share() {
        const commentBox = document.querySelector(".comment")
        if (!shareable) {
            return
        }
        const prompt = "Is the following message hateful and/or hurtful: \""
            + commentBox.value + "\" Answer with \"Yes\" or \"No\""
        setPrompt(prompt)
        handleSubmit()
        while (loading) {
            //console.log("loading")
        }
        console.log(prompt)
        console.log(apiResponse)
        if (apiResponse.slice(0, 2) !== "No") {
            console.log("bad")
            cancel()
            return
        }

        cleanup()
    }

    function cleanup() {
        setShareable(false)
    }

    

    return (
        <div className="upload-dialogue-container" hidden>
                
            <div className="display">

                <div className="get-data">
                    <div id="webcam-container"></div>
                    <div id="manual-upload">
                        {/*Problem: form is still accessible while hidden*/}
                        <input type="file" id="myFile" name="filename"/>
                        <input type="submit" onClick={getInfo}/>
                    </div>
                    <div className="spacer"></div>
                </div>

                <div className="info">
                    <div className="prediction"></div>
                    <div className="ai-suggestion"></div>
                    <textarea className="comment" rows="4" cols="50"/>

                </div>
            </div>


            <div className="options">
                <img className="share" onClick={share} src="/favicon.ico"/>
                <img className="cancel" onClick={cancel} src="/favicon.ico"/>
            </div>
        </div>
    )
}