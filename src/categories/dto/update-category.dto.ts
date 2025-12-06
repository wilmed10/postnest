import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsString({ message: 'El nombre de la categoría deb ser un string' })
    @IsNotEmpty({ message: 'El nombre de la categoría no puede estar vacío' })
    name: string;
}
