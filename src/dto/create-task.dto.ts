import { IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator'

export class CreateTaskDto {
    @IsString() //* Deberia ser un string
    @IsNotEmpty() //* No deberia estar vacio
    title: string;

    @IsString()
    @IsOptional() //* El valor es opcional
    description?: string;

    @IsBoolean() //* Deberia ser un boolean
    @IsOptional()
    done?: boolean
}