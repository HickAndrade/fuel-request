import React, { useState, useEffect } from 'react';


import { Layout } from '../shared/layout';
import { MainTitle } from '../shared/components/main-title';
import { FuelForm } from '../components/fuel-form';
import { InputField, SelectField } from '../shared/components/field';
import { orderService } from '../services';
import { Equipment } from '../models/Equipment';
import { OrderDTO } from '../dtos/OrderDTO';
import { toast } from 'react-toastify';



interface EquipmentOptions {
    label: string;
    value: number;
}

export const FuelRequestPage = (): JSX.Element => {
    const[EquipmentOptions, setEquipmentOptions] = useState<EquipmentOptions[]>([]);
    const[fuelRequest, setFuelRequest] = useState<OrderDTO>({ id:0, date: new Date().toLocaleDateString('pt-BR') });
    

    const getEquipmentOptions = async() => {
        const equipmentList: Equipment[] = await orderService.companyEquipments();
        const options = await Promise.all(
            equipmentList.map(({ id, description }) => ({
                value: id,
                label: description
            }))
        );
        
        setEquipmentOptions(options);
    }

    const getLastID = async() => {
        const requestId = await orderService.getLastID();
        setFuelRequest(prevState => ({...prevState, id: requestId }))
    }

    const updateFormField = (fieldName: string, val: string) => {
        setFuelRequest(prevState => ({ ...prevState, [fieldName]: val }));
    }
    const isFormValid = () => {
        const { fuel, tank, employeeName, equipament } = fuelRequest

        if(!!fuel === false){
            toast.error('Informe a quantidade requisitada. 🙁')
            return false
        }
        if(!!tank === false){
            toast.error('Selecione o Tanque. 🙁')
            return false
        }
        if(!!employeeName === false){
            toast.error('Informe o nome do Responsável. 🙁')
            return false
        }
        if(!!equipament === false){
            toast.error('Informe o Equipamento. 🙁')
            return false
        }
        return true;
    }

    const submitRequest = async() => {
        if(isFormValid()){
            try {
              const result = await orderService.createFuelOrder(fuelRequest);
              console.log(result)
                /* Parei aqui, o que sobrou foi terminar os serviços do supply e meio que replicar essa pagina pro supply também, mas adicionando.  */
            } catch (error) {
                
            }

        }
    }

    useEffect(() => {
        getEquipmentOptions();
        getLastID();
    
    },[])
    
    return (
    <Layout>
        <p>{fuelRequest.date.toString()}</p>
        <MainTitle title='Requisição' requestNumber={fuelRequest.id} />
        <FuelForm 
            onClickSubmit={submitRequest} 
            updateFormField={(fieldName: string, val: string) => updateFormField(fieldName, val)}>
            <SelectField fieldName='Equipamento' onChange={() => {}} options={EquipmentOptions} />
            <InputField onChange={()=>{}} fieldName='Responsável' type='text' placeholder='Nome do funcionário' />
        </FuelForm>
    </Layout>
    )
};

