CREATE TABLE interactions (
  interaction_id VARCHAR(75) PRIMARY KEY,
  processed_at datetime,
  main_sentiment varchar(max),
  main_emotion varchar(max),
  main_intent_group varchar(max),
  main_intent_subgroup varchar(max),
  hate_speech_flag bit,
  neg_sentiment_flag bit,
  joy_emotion_flag bit,
  disgust_emotion_flag bit,
  fear_emotion_flag bit,
  anger_emotion_flag bit,
  surprise_emotion_flag bit,
  sadness_emotion_flag bit,
  entities text,
);