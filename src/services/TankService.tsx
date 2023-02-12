import { Tank } from "../models/Tank";
import { BaseAPI } from "./BaseAPI";

export interface ITankService {
    getTankInfoById(tankId: number): Promise<string>;
}

export class TankService extends BaseAPI implements ITankService {
 
    async getTankInfoById(tankId: number): Promise<string> {
       return "";
    }
}

