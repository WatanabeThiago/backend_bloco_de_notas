import {
    Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne,
    JoinColumn
} from 'typeorm'

import User from './User';
@Entity('notes')
export default class Note {
    @PrimaryGeneratedColumn('increment')
    note_id: number;

    @Column()
    note_name: string;

    @Column()
    note_text: string;


    @ManyToOne(() => User, (user) => user.note)
    @JoinColumn({ name: 'user_id' })
    user: User;



}

