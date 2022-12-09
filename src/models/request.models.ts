export interface IRequest {
  type: string;
  startDate: Date;
  endDate: Date;
  notes: string;
}

export interface IRequestWithId {
  id: number;
}
