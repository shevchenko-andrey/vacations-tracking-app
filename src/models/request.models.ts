import { Moment } from 'moment';

export interface IRequest {
  type: string;
  startDate: Moment;
  endDate: Moment;
  notes: string;
}

export interface IRequestFullData extends IRequest {
  id: number;
  actions: Moment;
}
