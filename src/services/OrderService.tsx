import { OrderDTO } from "../dtos/OrderDTO";
import { Order } from "../models/Order";
import { BaseAPI } from "../config/BaseAPI";

export interface IOrderService { 
    getfuelOrder(): Promise<Order[]>;
    getFuelOrderById(orderId: number): Promise<Order>;
    createFuelOrder(order: OrderDTO): Promise<void>;
};

export class OrderService extends BaseAPI implements IOrderService {

    async getfuelOrder(): Promise<Order[]> {
        
        const fuelOrders: OrderDTO[] = [{
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
    
        const fuelOrders: OrderDTO = {
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
    async createFuelOrder(order: OrderDTO): Promise<void> {
        const teste = {
            id: '1',
            Equipament: 'Maquina',
            Responsavel: 'Hick',
            data: '16/02/2023',
            fuel:{
                quantidadeAtual: '500',
                tipoCombustivel: 'Diesel'
             },
            tank: {
                idtank:'1',
                quantidadeMax: '1000',
             fuel:{
                quantidadeAtual: '500',
                tipoCombustivel: 'Diesel'
             }
            }
        }
    }
}