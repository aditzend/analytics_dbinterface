create table events (
  event_id varchar(75) primary key,
  segment_id varchar(75),
  interaction_id varchar(75),
  event_type varchar(25),
  start_in_ms int,
  end_in_ms int,
  utterance varchar(max),
  channel int,
  intention varchar(max),
  entities varchar(max),
  sentiment varchar(max),
  emotion varchar(max),
  ner varchar(max),
  pos varchar(max),
  hate_speech varchar(max)
)