import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todos.entity';
import { ILike, Repository } from 'typeorm';
import { UpdateTodoStatusDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly repo: Repository<Todo>,
  ) {}

  async findAll(search?: string): Promise<Todo[]> {
    if (!search) return this.repo.find();
    return this.repo.find({ where: { title: ILike(`%${search}%`) } });
  }

  async findOne(id: number): Promise<Todo> {
    const todo = await this.repo.findOneBy({ id });

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    return todo;
  }

  async create(dto: CreateTodoDto): Promise<Todo> {
    const newTodo = this.repo.create(dto);
    return this.repo.save(newTodo);
  }

  async updateStatus(id: number, dto: UpdateTodoStatusDto): Promise<Todo> {
    const todo = await this.repo.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    const statusKeys: (keyof Pick<
      Todo,
      'created' | 'on_going' | 'completed' | 'problem'
    >)[] = ['created', 'on_going', 'completed', 'problem'];

    statusKeys.forEach((key) => {
      todo[key] = false;
    });

    const activeStatus = statusKeys.find((key) => dto[key] === true);
    if (activeStatus) {
      todo[activeStatus] = true;
    }

    if (dto.problem === true) {
      todo.problem_desc = dto.problem_desc ?? null;
    } else {
      todo.problem_desc = null;
    }

    return this.repo.save(todo);
  }

  async remove(id: number): Promise<void> {
    const todo = await this.repo.findOneBy({ id });

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    await this.repo.remove(todo);
  }
}
