import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Promotions extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

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
    type: 'string',
    required: true,
  })
  description: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Promotions>) {
    super(data);
  }
}

export interface PromotionsRelations {
  // describe navigational properties here
}

export type PromotionsWithRelations = Promotions & PromotionsRelations;
