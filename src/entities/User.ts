import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";


@Entity("users")
export class User {

  @PrimaryGeneratedColumn()
  id!: number;


  @Column({ type: "varchar" })
  username!: string;


  @Column({ type: "varchar", unique: true })
  email!: string;


  @Column({ type: "varchar" })
  password!: string;


  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;


  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

}