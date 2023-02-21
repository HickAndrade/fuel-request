import { Fuel } from "./Fuel";
import { Tank } from "./Tank";

export interface Order{
    id: number;
    date: string | Date;
    equipament?: string;
    employeeName?: string;
    tank: Tank;
    fuel: Fuel;
}