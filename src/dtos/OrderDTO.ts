import { FuelDTO } from "./FuelDTO";

export interface OrderDTO {
    id: number;
    tank?: number;
    date: string | Date;
    equipament?: string;
    employeeName?: string;
    fuel?: FuelDTO;
}