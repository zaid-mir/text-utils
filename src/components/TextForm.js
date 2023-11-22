import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  let handleChange = (event) => {
    setText(event.target.value);
    // console.log(text);
  };
  let handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  let handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  let handleReverseClick = () => {
    let revText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      revText += text[i];
    }
    // console.log(revText);
    setText(revText);
    props.showAlert("Reversed the Text", "success");
  };
  let handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the Text", "success");
  };

  let handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied the Text", "success");
  };

  let handleTrimClick = () => {
    let newText = text.trim();
    setText(newText);
    props.showAlert("Trimmed the Text", "success");
  };

  let handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  let handleCapitalizeChar = () => {
    const lower = text.toLowerCase();
    setText(lower.charAt(0).toUpperCase() + lower.slice(1));
    props.showAlert("Capitalized First", "success");
  }

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            placeholder="Enter text here"
            value={text}
            onChange={handleChange}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleTrimClick}>
          Trim Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalizeChar}>
          Capitalize First Character
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter(function(n) { return n !== '' }).length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter text in textbox above to display it here"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
