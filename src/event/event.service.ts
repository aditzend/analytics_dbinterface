import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
@Injectable()
export class EventService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Event)
    private eventRepo: Repository<Event>,
  ) {}

  logger = new Logger('EventService');
  async create(createEventDto: CreateEventDto) {
    return this.eventRepo.save(createEventDto);
  }
}
