import { TankDTO } from "../dtos/TankDTO";
import { BaseAPI } from "../config/BaseAPI";

export interface ITankService {
    getTankInfoById(tankId: number): Promise<TankDTO>;
}

export class TankService extends BaseAPI implements ITankService {
    

    async getTankInfoById(tankId: number): Promise<TankDTO> {
       const tankInfo = {
        tankId: 1,
        fuel: {
            liters: 2321,
             type: 'Diesel'
            }, 
            maxLiters: 10000
        }
       return tankInfo;
    }
}

