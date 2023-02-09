import React from "react";
import { SubmitButton } from "../../shared/components/button";
import { InputField, SelectField } from "../../shared/components/field/index";
import './FuelForm.scss';

interface FuelFormProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

const FuelForm = ({ children, onClick }: FuelFormProps): JSX.Element =>{
    return (
        <div className="fuel-form">
            <div className="budget-fuel">
                {/* Fuel Info */}
            </div>
            <div className="form-header">
              <InputField fieldName="Litros" type="number" /> 
              <SelectField fieldName="Tanque" options={[{label:'test', value: 'test'}]} onChange={() =>{}}/>
            </div>
            <span className="underline"/>
            <div>
                {children}
                <SubmitButton text="Confirmar" onClickSubmit={onClick}/>
            </div>

        </div>
    )
}

export default FuelForm;
