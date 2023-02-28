export class CreateSegmentDto {
  segment_id: string;

  interaction_id: string;

  processed_at: Date;

  main_sentiment: string;

  main_emotion: string;

  main_intent_group: string;

  main_intent_subgroup: string;

  hate_speech_flag: boolean;

  neg_sentiment_flag: boolean;

  joy_emotion_flag: boolean;

  disgust_emotion_flag: boolean;

  fear_emotion_flag: boolean;

  anger_emotion_flag: boolean;

  surprise_emotion_flag: boolean;

  sadness_emotion_flag: boolean;

  entities: string;
}
