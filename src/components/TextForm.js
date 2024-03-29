import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  let handleChange = (event) => {
    setText(event.target.value);
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
    setText(revText);
    props.showAlert("Reversed the Text", "success");
  };
  let handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the Text", "success");
  };

  let handleCopyClick = () => {
    navigator.clipboard.writeText(text);
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
              backgroundColor: props.mode === "light" ? "white" : "#3f2370",
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
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTrimClick}>
          Trim Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeChar}>
          Capitalize First Character
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
