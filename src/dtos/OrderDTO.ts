import { FuelDTO } from "./FuelDTO";
import { TankDTO } from "./TankDTO";

export interface OrderDTO {
    orderId: number;
    orderDate: string | Date;
    equipamentType: string;
    employee: string;
    tank: TankDTO;
    fuel: FuelDTO;
}