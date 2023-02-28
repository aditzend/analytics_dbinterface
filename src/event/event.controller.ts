import { Controller } from '@nestjs/common';
import { EventService } from './event.service';
import { Logger } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('v3/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}
  logger = new Logger('EventController');
  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    this.logger.log(`create ${createEventDto}`);
    return this.eventService.create(createEventDto);
  }
}
