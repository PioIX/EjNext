"use client"

//props
export default function Checkbox(props) {
    
    return (
        <input type="checkbox" defaultChecked={false} onClick={props.function}></input>

    );
  };