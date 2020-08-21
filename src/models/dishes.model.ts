import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Dishes extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'string',
    required: true,
  })
  label: string;

  @property({
    type: 'string',
    required: true,
  })
  price: string;

  @property({
    type: 'boolean',
    required: true,
  })
  featured: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Dishes>) {
    super(data);
  }
}

export interface DishesRelations {
  // describe navigational properties here
}

export type DishesWithRelations = Dishes & DishesRelations;
