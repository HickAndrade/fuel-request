import React from 'react';
import { Layout } from '../shared/layout';
import { MainTitle } from '../shared/components/main-title';
import { MenuOptions } from '../components/menu-options';
import BlackLogo from '../assets/black_logo.png';
import { useNavigate } from "react-router-dom";




export const IndexPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className='header-container'>
        <img src={BlackLogo} alt="logo-environment" />
        <MainTitle title='Controle de Combustível dos Tanques' />
      </div>
      <MenuOptions config={[
        { text: 'Abastecer Tanque', onClick: () => {navigate('/')} },
        { text: 'Realizar Requisição', onClick: () => {navigate('/request-fuel')} }
      ]}/>

    </Layout>
  )
}