import React, { useState } from 'react';
import '../styles/Field.scss'

interface SelectProps {
    options: Array<{value: number, label: string}>;
    onChange:(value: string) => void;
    fieldName: string;
}

const SelectField = ({ options, onChange, fieldName }:SelectProps ): JSX.Element => {
    const[selected, setSelected] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
        onChange(e.target.value);
    }

    return(
    <div className='select-field'>
    <label htmlFor={fieldName}> {fieldName}</label>
        <select value={selected} onChange={handleChange}>
            <option value="">Selecione</option>
            {options.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
            ))}
        </select>
    </div>
)};

export default SelectField;