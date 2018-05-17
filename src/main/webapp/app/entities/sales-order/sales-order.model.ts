import { BaseEntity } from './../../shared';

export class SalesOrder implements BaseEntity {
    constructor(
        public id?: number,
        public date?: any,
        public customer?: string,
        public totalAmount?: number,
        public sellerId?: number,
        public sellerName?: string,
        public orderItems?: BaseEntity[],
        public warehouseId?: number,
        public warehouseName?: string,
    ) {
    }
}
