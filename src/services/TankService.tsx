import { TankDTO } from "../dtos/TankDTO";
import { Tank } from "../models/Tank";
import { BaseAPI } from "../config/BaseAPI";

export interface ITankService {
    CreateTank(tank: TankDTO): Promise<void>;
    getTank(tankId: number): Promise<Tank[]>;
    getTankInfoById(tankId: number): Promise<Tank>;
    supplyTankFuel(tankId: number, qtdSupplied: number): Promise<void>;
    requestTankFuel(tankId: number, qtdSupplied: number): Promise<void>;
}

export class TankService extends BaseAPI implements ITankService {
    
    async CreateTank(tank: TankDTO): Promise<void> {
        throw new Error("Cria um tanque seguindo o padrão do DTO");
    }
    async getTank(): Promise<Tank[]> {
       const allTanks: TankDTO[] = [{
        id: 1,
        fuel: {
            liters: 5000,
            type: 'Diesel'
        },
        maxLiters: 10000,
        name: 'Tanque 01'
       },
       {
        id: 2,
        fuel: {
            liters: 5000,
            type: 'Diesel'
        },
        maxLiters: 10000,
        name: 'Tanque 02'
       }]
       return allTanks;
    }
    async getTankInfoById(tankId: number): Promise<Tank> {
        const tankInfo: TankDTO = {
         id: 1,
         name: 'Tanque 02',
         fuel: {
             liters: 2321,
              type: 'Diesel'
             }, 
             maxLiters: 10000
         }

        return tankInfo;
     }
    async supplyTankFuel(tankId: number, qtdSupplied: number): Promise<void> {
        throw new Error("Atualiza a quantidade Abastecida baseada no ID do tanque");
    }
    async requestTankFuel(tankId: number, qtdSupplied: number): Promise<void> {
        throw new Error("Atualiza a quantidade retirada baseada no ID do tanque");
    }
    
}

