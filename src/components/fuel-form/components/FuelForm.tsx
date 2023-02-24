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
    updateFormField: (fieldName: string, value: any) =>  void;
}

interface TankSelectProps {
    value: number;
    label: string;
}

const FuelForm = ({children, onClickSubmit, updateFormField }: FuelFormProps): JSX.Element =>{
   const[tankOptions, setTankOptions] = useState<TankSelectProps[]>([]);
   const[Tank, setTank] = useState<number>(0);

    async function getTankOptions(){
        const tankInfo:TankDTO[] = await tankService.getTank();  
        setTankOptions(() => tankInfo.map(({ id, name }) => ({value: id, label: name })))
    }
    
    async function updateTankInfo(val:number) {
        setTank(val);
        updateFormField('tank', val)
    }

    useEffect(() => { getTankOptions(); }, [])

    return (
        <div className="fuel-form">
            <TankInfo id={Tank} />
            <div className="form-header">
              <InputField fieldName="Litros" type="number" onChange={(val: string) => updateFormField('fuel', { type:'Diesel', liters: val })} /> 
              <SelectField fieldName="Tanque" options={tankOptions} onChange={(val: string) => updateTankInfo(Number(val))} />
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
