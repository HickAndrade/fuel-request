import React from 'react';
import '../styles/SubmitButton.scss';

interface SubmitButtonProps {
    onClickSubmit?: () => void;
    text: string;
}

const SubmitButton = ({ onClickSubmit, text }: SubmitButtonProps): JSX.Element => (
    <button className='submit-button' onClick={onClickSubmit}>{text}</button>
);

export default SubmitButton;