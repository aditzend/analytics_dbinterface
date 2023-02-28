import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Segment } from './entities/segment.entity';
import { CreateSegmentDto } from './dto/create-segment.dto';
@Injectable()
export class SegmentService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Segment)
    private segmentRepo: Repository<Segment>,
  ) {}

  async create(createSegmentDto: CreateSegmentDto) {
    return this.segmentRepo.save(createSegmentDto);
  }
}
