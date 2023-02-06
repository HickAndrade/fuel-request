import React from 'react';


interface Props {
    title: string;

}

const MainTitle: React.FC<Props> = ({ title }) => {
    return(
        <div className='main-title'>
            <h1>{title}</h1>
            <span className='underline'/>
        </div>
    )
}

export default MainTitle;

