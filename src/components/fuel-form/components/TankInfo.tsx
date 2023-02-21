import React, { useState, useEffect } from "react";
import '../styles/TankInfo.scss'
import { Tank } from "../../../models/Tank";

const TankInfo = ({ TankInfo }: { TankInfo: Tank }): JSX.Element => {

    const animationEffect = () => {
        const showInfo = document.getElementById('tank-info')!
        if(showInfo.classList.contains('show-info')){
            showInfo.classList.remove('show-info')
            setTimeout(()=> showInfo.classList.add('show-info'), 750)
        }else{
            setTimeout(()=> showInfo.classList.add('show-info'), 100)
        }
    }

    useEffect(() => {
        if(TankInfo.id !== 0){
            animationEffect();
        }
        
    }, [TankInfo])

    return (
        <div className='tank-wrapper' onClick={animationEffect}>
            <ul className="tank-info" id='tank-info' key={TankInfo.id}>
                <li>
                    <h4>Tanque</h4>
                    <p>{TankInfo.name}</p>     
                </li>
                <li>
                    <h4>Quantidade Max.</h4>
                    <p>{TankInfo.maxLiters}</p>     
                </li>
                <li>
                    <h4>Quantidade Atual</h4>
                    <p>{TankInfo.fuel.liters}</p>     
                </li>
                <li>
                    <h4>Tipo Combustível</h4>
                    <p>{TankInfo.fuel.type}</p>     
                </li>
            </ul>
        </div>
    )
}

export default TankInfo;