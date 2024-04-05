import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case!", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const clearText = () => {
        setText('');
        props.showAlert("Cleared text!", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success");
    }

    // const countWords = (word) => {
    //     let wordArr = text.split(/\s+/);
    //     console.log(word);
    //     let count = 0;
    //     for (let i = 0; i < wordArr.length; i++) {
    //         if (wordArr[i] !== "" && !(/^\s*$/.test(wordArr[i])))
    //             count++;
    //     }
    //     return count;
    // }

    const [text, setText] = useState(''); //text is state variable and we can change value of text by using setText function like setText("New text")
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#426495' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={speak}>Speak</button>
                <button className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2>Your text summary</h2>
                {/* <p><b>{countWords(text)}</b> words and <b>{text.length}</b> characters</p> */}
                <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
