import React, { forwardRef } from 'react';
import '../styles/Field.scss'

interface inputFieldProps {
    placeholder?: string;
    type: string;
    fieldName: string;
    onChange: (val: any) => void;
}


const InputField = ({ placeholder, type, fieldName, onChange }: inputFieldProps) => (
    <div className='input-field'>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input onChange={(e) => onChange(e.target.value)} type={type} name={fieldName} placeholder={placeholder}/>
    </div>
);

export default InputField;