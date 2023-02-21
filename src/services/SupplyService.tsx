

export interface ISupplyService {
    getSupplyOrder(): Promise<void>;
    getSupplyOrderById(): Promise<void>;
    createSupplyOrder(): Promise<void>;
}