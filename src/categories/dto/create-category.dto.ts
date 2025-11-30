import { IsString, IsNotEmpty } from 'class-validator';
export class CreateCategoryDto {
  @IsString({ message: 'El nombre de la categoría deb ser un string' })
  @IsNotEmpty({ message: 'El nombre de la categoría no puede estar vacío' })
  name: string;
}
