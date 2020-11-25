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

    @Column()
    user_id: number


    @ManyToOne(type => User, notes => Note, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;



}

