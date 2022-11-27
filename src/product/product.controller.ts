import { Post,Controller,Body,Get,Param,Delete,Patch,HttpCode } from '@nestjs/common';
import { FindProductDTO } from './dto/find-product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {
    @Post()
    async create(@Body() dto: Omit<ProductModel, '_id'>) {}

    @Get(':id')
    async get(@Param('id') id: string) {}

    @Delete(':id')
    async delete(@Param('id') id: string) {}

    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: ProductModel) {}

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindProductDTO) {}
}
