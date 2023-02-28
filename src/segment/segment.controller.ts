import { Controller } from '@nestjs/common';
import { SegmentService } from './segment.service';
import { Logger } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateSegmentDto } from './dto/create-segment.dto';

@Controller('v3/segment')
export class SegmentController {
  constructor(private readonly segmentService: SegmentService) {}
  logger = new Logger('SegmentController');
  @Post()
  async create(@Body() createSegmentDto: CreateSegmentDto) {
    this.logger.log(`Attempting to create ${createSegmentDto.segment_id}`);
    return this.segmentService.create(createSegmentDto);
  }
}
