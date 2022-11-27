import { IsString, IsNumber, Max, Min } from 'class-validator'

export class CreateReviewDTO {
    @IsString()
    name: string;

    @IsString()
    title: string;

    @IsString()
    description: string;
    
    @IsNumber()
    @Max(5)
    @Min(1, {message: 'Rating can not low 1'})
    rating: number;

    @IsString()
    productId: string;
}