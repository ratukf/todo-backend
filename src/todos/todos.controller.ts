import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todos.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoStatusDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getToDos(@Query('search') search?: string): Promise<Todo[]> {
    return this.todosService.findAll(search);
  }

  @Get(':id')
  async getTodoById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todosService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(dto);
  }

  @Patch(':id')
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTodoStatusDto,
  ): Promise<Todo> {
    return this.todosService.updateStatus(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todosService.remove(id);
  }
}
