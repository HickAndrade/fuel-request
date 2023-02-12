import React, { useEffect, useState } from "react";
import { SubmitButton } from "../../../shared/components/button";
import { InputField, SelectField } from "../../../shared/components/field/index";
import TankInfo from "./TankInfo";
import '../styles/FuelForm.scss';

interface FuelFormProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

const FuelForm = ({ children, onClick }: FuelFormProps): JSX.Element =>{
   const[tankOptions, setTankOptions] = useState([]);

  {/*
    Este componente vai instanciar o filho e direcionar para o serviço responsavel (Inserção ou retirada de combustivel)
*/}
    return (
        <div className="fuel-form">
            <TankInfo />
            <div className="form-header">
              <InputField fieldName="Litros" type="number" /> 
              <SelectField fieldName="Tanque" options={tankOptions} onChange={() =>{}}/>
            </div>
            <span className="underline"/>
            <div className="redirect-info">
                {children}
                <SubmitButton text="Confirmar" onClickSubmit={onClick}/>
            </div>
        </div>
    )
}

export default FuelForm;
