import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


/**
 * @class Base
 * @abstract
 *
 * @Description Base entity class to be inherited from the rest of entity models. Note that only models that need to work
 * directly with a service must be extending this class.
 * This base abstract class will provide
 */
export abstract class Base {

    /**
     * @property id number
     *
     * @Description Primary generated column. Unsigned and type bigint provided to match the current database ids generated from Laravel
     */
    @PrimaryGeneratedColumn({ unsigned: true, type: 'bigint' })
    id: number;

    /**
     * @property created_at Timestamp
     *
     * @Description Create date column. To be auto fulfilled when an entity is created in the database
     */
    @CreateDateColumn({ name: 'created_at', type: 'timestamp'})
    created_at: Timestamp;

    /**
     * @property updated_at Timestamp
     *
     * @Description Update date column. To be auto fulfilled when an entity is updated in the database
     */
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp'})
    updated_at: Timestamp;

    /**
     * @property deleted_at Timestamp
     *
     * @Description Delete date column. To be auto fulfilled when an entity is soft deleted in the database.
     */
    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deleted_at: Timestamp;
}
