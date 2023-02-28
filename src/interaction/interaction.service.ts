import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Interaction } from './entities/interaction.entity';
import { CreateInteractionDto } from './dto/create-interaction.dto';
@Injectable()
export class InteractionService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Interaction)
    private interactionRepo: Repository<Interaction>,
  ) {}

  async create(createInteractionDto: CreateInteractionDto) {
    return this.interactionRepo.save(createInteractionDto);
  }
}
