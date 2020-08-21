import {Entity, model, property} from '@loopback/repository';

@model()
export class Leaders extends Entity {
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
  designation: string;

  @property({
    type: 'string',
    required: true,
  })
  abbr: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<Leaders>) {
    super(data);
  }
}

export interface LeadersRelations {
  // describe navigational properties here
}

export type LeadersWithRelations = Leaders & LeadersRelations;
