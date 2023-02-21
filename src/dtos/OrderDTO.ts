import { FuelDTO } from "./FuelDTO";
import { TankDTO } from "./TankDTO";

export interface OrderDTO {
    id: number;
    tank?: number;
    date: string | Date;
    equipament?: string;
    employeeName?: string;
    fuel?: FuelDTO;
}