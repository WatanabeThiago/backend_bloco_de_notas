import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany, JoinColumn } from 'typeorm'
import bcrypt from 'bcryptjs'


import Note from './Note'

@Entity('user')
export default class User {

    @PrimaryGeneratedColumn('increment')
    user_id: number;

    @Column()
    user_username: string;

    @Column()
    user_password: string;

    @OneToMany(type => Note, user => User)
    notes: Note[]



    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.user_password = bcrypt.hashSync(this.user_password, 8)
    }
}

