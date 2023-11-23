import React from "react";

function Alert(props) {
  //Function to capitalize 1st letter of the word
  function capitalize(word) {
    //First lowercase the entire word
    const lower = word.toLowerCase();
    //Capitalize the character at 0 index and concatinate the rest of the word but slice the first character
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height: "50px"}}>
    {props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )}
    </div>
  );
}

export default Alert;
