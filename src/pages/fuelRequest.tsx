import React, { useState, useEffect } from 'react';
import { Layout } from '../shared/layout';
import { MainTitle } from '../shared/components/main-title';
import { FuelForm } from '../components/fuel-form';
import { InputField, SelectField } from '../shared/components/field';
import { orderService } from '../services';
import { Equipment } from '../models/Equipment';
import { OrderDTO } from '../dtos/OrderDTO';

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

    useEffect(() => {
        getEquipmentOptions();
        getLastID();
        },[])
    
    return (
    <Layout>
        <p>{fuelRequest.date.toString()}</p>
        <MainTitle title='Requisição' requestNumber={fuelRequest.id} />
        <FuelForm onClickSubmit={() => { }}>
            <SelectField fieldName='Equipamento' onChange={() => {  }} options={EquipmentOptions} />
            <InputField fieldName='Responsável' type='text' placeholder='Nome do funcionário' />
        </FuelForm>
    </Layout>
    )
};

