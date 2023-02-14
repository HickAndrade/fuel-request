import { FuelDTO } from "./FuelDTO";

export interface TankDTO {
    tankId: number;
    maxLiters: number;
    fuel: FuelDTO;
}