import React from 'react';
import { Layout } from '../shared/layout';
import { MainTitle } from '../shared/components/main-title';
import MenuOptions from '../components/menu-options/MenuOptions';
import BlackLogo from '../assets/black_logo.png';



export const IndexPage = () => {
  return (
    <Layout>
      <div className='header-container'>
        <img src={BlackLogo} alt="logo-environment" />
        <MainTitle title='Controle de Combustível dos Tanques' />
      </div>
      <MenuOptions config={[{
        text: 'Abastecer Tanque', onClick: () => {console.log('testando')}
      },
      {
        text: 'Realizar Requisição', onClick: () => {console.log('testando')}
      }
      ]}/>

    </Layout>
  )
}