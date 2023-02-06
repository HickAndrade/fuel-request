import { Fuel } from "./Fuel";
import { Tank } from "./Tank";

export interface Order {
    orderId: number;
    orderDate: string | Date;
    equipamentType: string;
    employee: string;
    tank: Tank;
    fuel: Fuel;
}