import React, { useEffect, useState } from "react";
import '../styles/TankInfo.scss'
import { Tank } from "../../../models/Tank";
import { tankService } from "../../../services";


interface TankInfoProps {
    id: number;
}

const initialTank = {
    id: 0,
    name: '',
    fuel:{
        type: '',
        liters: 0
    }, 
    maxLiters: 0
}

const TankInfo = ({ id }:TankInfoProps): JSX.Element => {
    const[Tank, setTank] = useState<Tank>(initialTank);


    const tankAnimation = (exists: any) => {
        const showInfo = document.getElementById('tank-info')!
        
        if(!exists){
            showInfo.classList.remove('show-info')
            return
        }

         if(showInfo.classList.contains('show-info')){
            showInfo.classList.remove('show-info')
            setTimeout(()=> showInfo.classList.add('show-info'), 750)
        }else{
            setTimeout(()=> showInfo.classList.add('show-info'), 100)
        }  
    }
    


    useEffect(() => { 
        async function showTankInfo(tankId: number){
            const info:Tank = await tankService.getTankInfoById(tankId);
            setTank(info);
            tankAnimation(info);
        }  

       
        showTankInfo(id); 
       
    }, [id])

    return (
        <div className='tank-wrapper'>
            <ul className="tank-info" id='tank-info' key={Tank.id}>
                <li>
                    <h4>Tanque</h4>
                    <p>{Tank.name}</p>     
                </li>
                <li>
                    <h4>Quantidade Max.</h4>
                    <p>{Tank.maxLiters}</p>     
                </li>
                <li>
                    <h4>Quantidade Atual</h4>
                    <p>{Tank.fuel.liters}</p>     
                </li>
                <li>
                    <h4>Tipo Combustível</h4>
                    <p>{Tank.fuel.type}</p>     
                </li>
            </ul>
        </div>
    )
}

export default TankInfo;