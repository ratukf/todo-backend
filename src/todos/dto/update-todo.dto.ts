import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTodoStatusDto {
  @IsBoolean()
  @IsOptional()
  created?: boolean;

  @IsBoolean()
  @IsOptional()
  on_going?: boolean;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;

  @IsBoolean()
  @IsOptional()
  problem?: boolean;

  @IsOptional()
  @IsString()
  problem_desc?: string | null;
}
