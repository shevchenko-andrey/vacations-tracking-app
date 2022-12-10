import { Moment } from 'moment';

export interface IRequest<D = Moment> {
  type: string;
  startDate: D;
  endDate: D;
  notes: string;
}

export interface IRequestFullData extends IRequest<string> {
  id: number;
  actions: string;
}
