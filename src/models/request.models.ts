import { Dayjs } from 'dayjs';

export interface IRequest<D = Dayjs> {
  type: string;
  startDate: D;
  endDate: D;
  notes: string;
}

export interface IRequestFullData extends IRequest<string> {
  id: number;
  actions: string;
}
