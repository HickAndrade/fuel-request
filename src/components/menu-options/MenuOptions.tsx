import React from 'react';
import { Button } from '../../shared/components/button';
import './MenuOptions.scss'

interface Options {
    config: {
        text: any;
        onClick: () => void;
    }[];
}

const MenuOptions = ({ config }:Options): JSX.Element => {
  return(
    <div className='menu-options'>
      {
        config.map(({ onClick, text }) => (
            <Button key={text} onClick={ () => onClick() } text={text}/>
        ))
      }
    </div>
    )
}

export default MenuOptions;