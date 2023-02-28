-- from this entity create a table in sql SERVER


-- import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

-- @Entity('Events')
-- export class Event {
--   @PrimaryGeneratedColumn()
--   idEvent: number;

--   @Column()
--   idSegmento: string;

--   @Column()
--   idInteraccion: string;

--   @Column()
--   tipo: string;

--   @Column()
--   comienzo: number;

--   @Column()
--   fin: number;

--   @Column()
--   texto: string;

--   @Column()
--   intencion: string;

--   @Column()
--   entidades: string;

--   @Column()
--   sentimientos: string;

--   @Column()
--   emociones: string;

--   @Column()
--   ner: string;

--   @Column()
--   pos: string;

--   @Column()
--   hateSpeech: string;
-- }

create table Events (
  idEvent varchar(75) primary key,
  idSegmento varchar(75),
  idInteraccion varchar(75),
  tipo varchar(25),
  comienzo int,
  fin int,
  texto varchar(max),
  intencion varchar(max),
  entidades varchar(max),
  sentimientos varchar(max),
  emociones varchar(max),
  ner varchar(max),
  pos varchar(max),
  hateSpeech varchar(max)
)