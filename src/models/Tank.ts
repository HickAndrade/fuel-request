import { Fuel } from "./Fuel";

export interface Tank {
    id: number;
    name:string;
    maxLiters: number;
    fuel: Fuel;
}