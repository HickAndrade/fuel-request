import React, { useState } from "react";
import '../styles/TankInfo.scss'

interface TankInfoProps {
    tankId: string;
    name: string;
}

const TankInfo = (): JSX.Element => {
    const[selectedTank, setSelectedTank] = useState(0);
    const[Tank, setTank] = useState([{label: '', value:'', id: ''}]);

    return (
        <div className="tank-wrapper show-info">
            <div className="tank-info">
                <h4>Tanque</h4>
                <p>ceter</p>
            </div>
            <div className="tank-info">
                <h4>Capacidade Máx.</h4>
                <p>ceter</p>
            </div>
            <div className="tank-info">
                <h4>Quantidade Atual</h4>
                <p>ceter</p>
            </div>
            <div className="tank-info">
                <h4>Tipo Combustível</h4>
                <p>ceter</p>
            </div>
        </div>
    )
}

export default TankInfo;