import { React, useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai"

import "./style.css"

const API_KEY = "GETYOUROWNKEY"


export default function UploadDialogue() {

    const [shareable, setShareable] = useState(false)

    let configuration = new Configuration({ apiKey: API_KEY,});

    // Delete it
    delete configuration.baseOptions.headers['User-Agent'];

    
    const openai = new OpenAIApi(configuration);

    const handleSubmit = async (prompt) => {
        
      try {
        //console.log("Prompt: " + prompt)
        const result = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
        //   model: "text-davinci-003",
          messages: [{ role: "user", content: prompt }],
        //   prompt: prompt,
        //   temperature: 0.3,
        //   max_tokens: 500,
        });
        //console.log("response", result.data.choices[0].text);
        // setApiResponse(result.data.choices[0].text);
        //console.log("result: "+ result.data.choices[0].message.content)
        return result.data.choices[0].message.content  
      } catch (e) {
        console.log(e);
        return "Something went wrong, try again..."
      }

    };

    // useEffect(() => {
    //     handleSubmit("hi")
    // }, [])

    async function getInfo() {
        const dialogueBox = document.querySelector('.upload-dialogue-container');
        const webcamContainer = document.getElementById("webcam-container")
        webcamContainer.setAttribute("freeze", "true")
        
        const predictionBox = document.querySelector('.prediction')
        const suggestionBox = document.querySelector('.ai-suggestion')
        try {
        const category = predictionBox.innerHTML
        
        const p = "What is 1 way to recycle " + category + " waste?"
        const result = await handleSubmit(p)

        // console.log(result)

        // while (loading) {
        //     console.log("loading")
        // }
        //console.log(apiResponse)
        suggestionBox.innerHTML = result

        setShareable(true)

        } catch(e) {
            console.log(e)
            dialogueBox.setAttribute("hidden", "true")
        } finally {
        }
    }

    function cancel() {
        const dialogueBox = document.querySelector('.upload-dialogue-container');
        dialogueBox.setAttribute("hidden", "true")
        document.getElementById("webcam-container").innerHTML = ""
        cleanup()
    }

    async function share() {
        const commentBox = document.querySelector(".comment")
        const errorBox = document.querySelector(".error-panel")
        
        if (!shareable) {
            return
        }

        if (commentBox.value == "") {
            return
        }

        const p = "Is the following message hateful, hurtful, or misleading? \""
            + commentBox.value + "\" Answer with \"Yes\" or \"No\""
        const result = await handleSubmit(p)

        // console.log(apiResponse)
        console.log(result)
        if (result.slice(0, 3) === "Yes") {
            errorBox.removeAttribute("hidden")
            errorBox.innerHTML = "Sorry, that is not an appropriate comment"
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
                        <button type="submit" onClick={getInfo}>Submit Photo</button>
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
                <img className="share" onClick={share} src="/assets/share.png"/>
                <img className="cancel" onClick={cancel} src="/assets/cancel.png"/>
            </div>
        </div>
    )
}