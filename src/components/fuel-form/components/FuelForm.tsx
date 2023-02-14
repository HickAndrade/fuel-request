import React, { useEffect, useState } from "react";
import { SubmitButton } from "../../../shared/components/button";
import { InputField, SelectField } from "../../../shared/components/field/index";
import TankInfo from "./TankInfo";
import { tankService } from "../../../services";
import { TankDTO } from "../../../dtos/TankDTO";
import '../styles/FuelForm.scss';

interface FuelFormProps {
    children?: React.ReactNode;
    onClickSubmit?: () => void;
    tankFields?: TankDTO;
}

const FuelForm = ({children, onClickSubmit }: FuelFormProps): JSX.Element =>{
   const[tankOptions, setTankOptions] = useState([
        {value:'01', label: 'Tank 01'},
        {value:'02', label: 'Tank 02'},
        {value:'03', label: 'Tank 03'},
    ]);
    const[tankHeader, setTankHeader] = useState<TankDTO>({tankId: 0,fuel: {liters: 0, type: 'diesel'}, maxLiters: 0});


    async function showingInfo(){
        const result:TankDTO = await tankService.getTankInfoById(1);
        setTankHeader(result);
    }

    


  // eslint-disable-next-line no-lone-blocks
  {/* Este componente vai instanciar o filho e direcionar para o serviço responsavel (Inserção ou retirada de combustivel) */}
  
    return (
        <div className="fuel-form">
            <TankInfo TankInfo={tankHeader}/>
            <div className="form-header">
              <InputField fieldName="Litros" type="number" /> 
              <SelectField fieldName="Tanque" options={tankOptions} onChange={() => showingInfo()}/>
            </div>
            <span className="underline"/>
            <div className="redirect-info">
                {children}
            </div>
            <SubmitButton text="Confirmar" onClickSubmit={onClickSubmit}/>
        </div>
    )
}

export default FuelForm;
