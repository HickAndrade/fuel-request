import { OrderService } from "./OrderService";
import { TankService } from "./TankService";

const tankService = new TankService();
const orderService = new OrderService();

export {
    orderService,
    tankService
}