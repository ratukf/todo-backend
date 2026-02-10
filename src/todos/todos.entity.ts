import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  created: boolean;

  @Column({ default: false })
  completed: boolean;

  @Column({ default: false })
  on_going: boolean;

  @Column({ default: '' })
  problem: string;

  @Column({ nullable: true })
  problem_desc?: string;
}
