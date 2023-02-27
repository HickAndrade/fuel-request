import { Order } from "./Order";

export interface SupplyOrderDTO extends Omit<Order, "equipament" | "employeeName">{
    comprovante: string;
}