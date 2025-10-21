import "./Button.css";
import React from 'react';

export default function Button(props) {
  return (
    <a href={`#${props.link}`} className="custom-button">
      {props.name}
    </a>
  );
}
