import { Dayjs } from 'dayjs';

export enum VacationType {
  Staycation = 'Staycation',
  Sports_Vacation = 'Sports Vacation',
  Volunteer_Vacation = 'Volunteer Vacation',
  Beach_Vacation = 'Beach Vacation',
  Cruise_Vacation = 'Cruise Vacation',
  Camping_Vacation = 'Camping vacation',
  Road_Trip_Vacation = 'Road Trip Vacation',
  Sightseeing_Type_Of_Vacation = 'Sightseeing Type of Vacation',
}

export interface IRequest<D = Dayjs> {
  type: VacationType;
  startDate: D | null;
  endDate: D | null;
  notes: string;
}

export interface IRequestFullData extends IRequest<string> {
  id: number;
  action: string;
}
