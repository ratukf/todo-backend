import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: true })
  created: boolean;

  @Column({ default: false })
  completed: boolean;

  @Column({ default: false })
  on_going: boolean;

  @Column({ default: false })
  problem: boolean;

  @Column({ nullable: true })
  problem_desc?: string;
}
