export class CreateEventDto {
  event_id: string;

  segment_id: string;

  interaction_id: string;

  event_type: string;

  start_in_ms: number;

  end_in_ms: number;

  utterance: string;

  channel: number;

  intention: string;

  entities: string;

  sentiment: string;

  emotion: string;

  ner: string;

  pos: string;

  hate_speech: string;
}
