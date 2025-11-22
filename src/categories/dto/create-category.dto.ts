import { IsString, IsNotEmpty } from 'class-validator';
export class CreateCategoryDto {
  @IsString({ message: 'El nombre de la categoría no puede ir vacío' })
  @IsNotEmpty({ message: 'El nombre de la categoría no puede estar vacío' })
  name: string;
}
