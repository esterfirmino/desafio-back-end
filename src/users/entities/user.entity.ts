import { Entity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, OneToMany, JoinTable} from "typeorm"
import { Exclude } from "class-transformer"

@Unique(['email'])
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    username: string;

    @Column({ length: 255, unique: true })
    email: string;
    
    @Column({ length: 255 })
    @Exclude()
    password: string;

    @Column({ length: 255 })
    referral_link: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => User, (user) => user.indicador_users)
    indicador_users: User[];

    @OneToOne(() => User, (user) => user.indicado_users)
    indicado_users: User;
}
