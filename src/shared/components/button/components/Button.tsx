import React from 'react';
import '../styles/Button.scss';

interface ButtonProps {
    text: any;
    onClick: () => void;
}

const Button = (props: ButtonProps): JSX.Element => (
    <div className="button" onClick={() => props.onClick() }>{props.text}</div>
)

export default Button;



