import React from 'react';
import Button from '../../shared/components/button/Button';
import './MenuOptions.scss'

interface Options {
    config: {
        text: any;
        onClick: () => void;
    }[];
}

const MenuOptions: React.FC<Options> = ({ config }) => {
  return(
    <div className='menu-options'>
      {
        config.map(({ onClick, text }) => (
            <Button onClick={ () => onClick() } text={text}/>
        ))
      }
    </div>
    )
}

export default MenuOptions;