import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryColumn()
  event_id: string;

  @Column()
  segment_id: string;

  @Column()
  interaction_id: string;

  @Column()
  event_type: string;

  @Column()
  start_in_ms: number;

  @Column()
  end_in_ms: number;

  @Column()
  utterance: string;

  @Column()
  channel: number;

  @Column()
  intention: string;

  @Column()
  entities: string;

  @Column()
  sentiment: string;

  @Column()
  emotion: string;

  @Column()
  ner: string;

  @Column()
  pos: string;

  @Column()
  hate_speech: string;
}
