import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const InverseClick = () => {
        let newText = [...text].map(text => text === text.toUpperCase() ? text.toLowerCase() : text.toUpperCase()).join('');
        setText(newText);
    };

    const AlternatingClick = () => {
        let newText = text.split('').map((text, i) => i % 2 === 0 ? text.toLowerCase() : text.toUpperCase()).join('');
        setText(newText);
    };

    const copyToClipboard = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    };

    const handleonChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('Enter your text here!');

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className='form-control' value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark' ? '#021f2c' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id='myBox' rows="12"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Upper Case</button>
                <button className='btn btn-success mx-2' onClick={handleLowClick}>Lower Case</button>
                <button className='btn btn-warning mx-2' onClick={InverseClick}>Inverse Case</button>
                <button className='btn btn-danger mx-2' onClick={AlternatingClick}>Alternating Case</button>
                <button className='btn btn-info mx-2' onClick={copyToClipboard}>Copy Text</button>
                <button className='btn btn-light mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className='btn btn-dark mx-2' onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : "Enter something in the textBox above to Preview it here"}</p>
            </div>
        </>
    )
}