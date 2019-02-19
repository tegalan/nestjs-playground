import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    name: string;

    @Column('int')
    age: number;
}
