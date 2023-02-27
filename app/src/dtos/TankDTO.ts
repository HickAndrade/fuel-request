import { FuelDTO } from "./FuelDTO";


export interface TankDTO {
    id: number;
    name:string;
    maxLiters?: number;
    fuel?: FuelDTO;
}