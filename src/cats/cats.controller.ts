import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';

@Controller('cats')
export class CatsController {

    constructor(private readonly catService: CatsService) {}

    @Get()
    async getIndex(): Promise<Cat[]> {
        return this.catService.findAll();
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        const newCat = new Cat();
        newCat.name = createCatDto.name;
        newCat.age = createCatDto.age;

        return this.catService.create(newCat);
    }

    @Get(':id')
    getDetail(@Param('id') id) {
        return {
            id,
            name: 'Meow',
        };
    }
}
