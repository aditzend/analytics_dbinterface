import { Controller } from '@nestjs/common';
import { InteractionService } from './interaction.service';
import { Logger } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateInteractionDto } from './dto/create-interaction.dto';

@Controller('v3/interaction')
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}
  logger = new Logger('InteractionController');
  @Post()
  async create(@Body() createInteractionDto: CreateInteractionDto) {
    this.logger.log(
      `Attempting to create ${createInteractionDto.interaction_id}`,
    );
    return this.interactionService.create(createInteractionDto);
  }
}
