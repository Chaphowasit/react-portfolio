//create button component
import React from 'react';
import './Button.css';

const Button = ({ text, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
        "Click {text} times"
        </button>
    );
    };

export default Button;