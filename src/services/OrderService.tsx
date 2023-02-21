import { OrderDTO } from "../dtos/OrderDTO";
import { Order } from "../models/Order";
import { Equipment } from "../models/Equipment";

import { BaseAPI } from "../config/BaseAPI";


export interface IOrderService { 
    getfuelOrder(): Promise<Order[]>;
    getFuelOrderById(orderId: number): Promise<Order>;
    createFuelOrder(order: OrderDTO): Promise<void>;
    companyEquipments(): Promise<Equipment[]>;
};

export class OrderService extends BaseAPI implements IOrderService {

    async getfuelOrder(): Promise<Order[]> {
        
        const fuelOrders: Order[] = [{
            id: 1,
            date: '17/02/2023',
            tank:{
                id: 1,
                name: 'Tanque 01',
                maxLiters: 10000,
                fuel: {
                    type: "Diesel",
                    liters: 5000
                }
            },
            fuel: {
                liters: 3000,
                type: 'Diesel'
            }
        }]

        return fuelOrders;
    }
    async getFuelOrderById(orderId: number): Promise<Order> {
    
        const fuelOrders: Order = {
            id: 1,
            date: '17/02/2023',
            tank:{
                id: 1,
                name: 'Tanque 01',
                maxLiters: 10000,
                fuel: {
                    type: "Diesel",
                    liters: 5000
                }
            },
            fuel: {
                liters: 3000,
                type: 'Diesel'
            }
        }

        return fuelOrders;
    }

    async getLastID():Promise<number>{
        return 1
    }

    async createFuelOrder(order: OrderDTO): Promise<void> {
        const fuelOrders: OrderDTO = {
            id: 1,
            tank:1,
            date: '17/02/2023',
            fuel: {
                liters: 3000,
                type: 'Diesel'
            }
        }
    }
    
    async companyEquipments(): Promise<Equipment[]> {
        const equipment: Equipment[] = [{
            id: 1,
            description: 'Empilhadeira'
        },{
            id: 2,
            description: 'Outro Equipamento'
        }]

        return equipment;
    }
}



