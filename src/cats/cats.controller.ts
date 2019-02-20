import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'typeorm';
import { CatsGateway } from 'src/cats.gateway';

@Controller('cats')
export class CatsController {

    // @WebSocketServer() socket;

    constructor(
        private readonly catService: CatsService,
        private readonly catGateway: CatsGateway,
    ) {}

    @Get()
    async getIndex(): Promise<Cat[]> {
        return this.catService.findAll();
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        const newCat = new Cat();
        newCat.name = createCatDto.name;
        newCat.age = createCatDto.age;

        const savedCat = await this.catService.create(newCat);
        // this.catGateway.server.emit('message', savedCat);

        return savedCat;
    }

    @Get(':id')
    getDetail(@Param('id') id) {
        return {
            id,
            name: 'Meow',
        };
    }
}
