import React from 'react';
import '../styles/Field.scss'

interface inputFieldProps {
    placeholder?: string;
    type: string;
    fieldName: string;
}


const InputField = ({ placeholder, type, fieldName }:inputFieldProps): JSX.Element => (
    <div className='input-field'>
        <label htmlFor={fieldName}>{fieldName}</label>
        <input type={type} name={fieldName} placeholder={placeholder}/>
    </div>
);


export default InputField;