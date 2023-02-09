import React from 'react';
import './MainTitle.scss';

interface Props {
    title: string;
    requestNumber?:number;
}

const MainTitle = ({ title, requestNumber }:Props): JSX.Element => (
    <div className='main-title'>
        {requestNumber ? (
          <h1>{title}<b>{' #00' + requestNumber }</b></h1>
        ):(
          <h1>{title}</h1>
        )}
        <span className='underline'/>
    </div>
)

export default MainTitle;

