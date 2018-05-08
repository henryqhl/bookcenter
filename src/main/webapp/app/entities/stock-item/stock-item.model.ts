import { BaseEntity } from './../../shared';

export class StockItem implements BaseEntity {
    constructor(
        public id?: number,
        public quantity?: number,
        public book?: BaseEntity,
        public warehouse?: BaseEntity,
    ) {
    }
}
