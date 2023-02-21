import { OrderDTO } from "./OrderDTO";

export interface SupplyOrderDTO extends Omit<OrderDTO, "equipament" | "employeeName">{
    comprovante: string;
}