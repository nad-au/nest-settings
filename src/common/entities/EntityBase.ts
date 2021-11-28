import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class EntityBase {
    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'modified_at',
    })
    modifiedAt: Date;
}