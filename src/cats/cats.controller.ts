import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interfaces';

@Controller('cats')
export class CatsController {

    constructor(private readonly catService: CatsService) {}

    @Get()
    getIndex(): Cat[] {
        return this.catService.findAll();
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catService.create(createCatDto);
    }

    @Get(':id')
    getDetail(@Param('id') id) {
        return {
            id,
            name: 'Meow',
        };
    }
}
