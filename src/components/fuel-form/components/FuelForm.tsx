import React, { useEffect, useState } from "react";
import { SubmitButton } from "../../../shared/components/button";
import { InputField, SelectField } from "../../../shared/components/field/index";
import TankInfo from "./TankInfo";
import { tankService } from "../../../services";
import { Tank } from "../../../models/Tank";
import { TankDTO } from "../../../dtos/TankDTO";
import '../styles/FuelForm.scss';

interface FuelFormProps {
    children?: React.ReactNode;
    onClickSubmit?: () => void;
    tankFields?: TankDTO;
}

interface TankSelectProps {
    value: number;
    label: string;
}


const FuelForm = ({children, onClickSubmit }: FuelFormProps): JSX.Element =>{
   const[tankOptions, setTankOptions] = useState<TankSelectProps[]>([]);
    const[tankHeader, setTankHeader] = useState<Tank>({
        id: 0,
        name: '',
        fuel:{
            type: '',
            liters: 0
        }, 
        maxLiters: 0
    });

    async function showTankInfo(tankId: number){
        const tankInfo:Tank = await tankService.getTankInfoById(tankId);
        setTankHeader(tankInfo);
    }

    async function getTankOptions(){
        const tankInfo:TankDTO[] = await tankService.getTank();
        setTankOptions(() => tankInfo.map(({id, name}) => ({value: id, label: name })))
    }

    useEffect(() => { getTankOptions(); }, [])
  
    return (
        <div className="fuel-form">
            <TankInfo TankInfo={tankHeader}/>
            <div className="form-header">
              <InputField fieldName="Litros" type="number" /> 
              <SelectField fieldName="Tanque" options={tankOptions} onChange={(e) => showTankInfo(Number(e))}/>
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
