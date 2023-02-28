import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('interactions')
export class Interaction {
  @PrimaryColumn()
  interaction_id: string;

  @Column()
  processed_at: Date;

  @Column()
  main_sentiment: string;

  @Column()
  main_emotion: string;

  @Column()
  main_intent_group: string;

  @Column()
  main_intent_subgroup: string;

  @Column()
  hate_speech_flag: boolean;

  @Column()
  neg_sentiment_flag: boolean;
  @Column()
  joy_emotion_flag: boolean;
  @Column()
  disgust_emotion_flag: boolean;
  @Column()
  fear_emotion_flag: boolean;
  @Column()
  anger_emotion_flag: boolean;
  @Column()
  surprise_emotion_flag: boolean;
  @Column()
  sadness_emotion_flag: boolean;
  @Column()
  entities: string;
}
