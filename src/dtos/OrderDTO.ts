import { FuelDTO } from "./FuelDTO";
import { TankDTO } from "./TankDTO";

export interface OrderDTO {
    id: number;
    date: string | Date;
    equipament?: string;
    employeeName?: string;
    tank: TankDTO;
    fuel: FuelDTO;
}