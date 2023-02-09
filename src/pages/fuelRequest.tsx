import React from 'react';
import { Layout } from '../shared/layout';
import { MainTitle } from '../shared/components/main-title';
import { FuelForm } from '../components/fuel-form';

export const FuelRequestPage = (): JSX.Element => {
 return(
        <Layout>
            <p>{new Date().toLocaleDateString()}</p>
            <MainTitle title='Requisição' requestNumber={1}/>
            <FuelForm />
        </Layout>
    )
};

