import moment, { Moment } from 'moment';
import { DushboardFilterMod } from '../screens/Dashboard/Dushboard.models';
import { IRequest, IRequestFullData } from './../models/request.models';

interface IRequestOptions {
  filter?: DushboardFilterMod;
}

export const getRequests = async ({ filter }: IRequestOptions) => {
  const data = localStorage.getItem('requests');
  if (!data) {
    return [];
  }
  const requests = JSON.parse(data) as IRequestFullData[];

  switch (filter) {
    case DushboardFilterMod.ACTUAL:
      return requests.filter(({ endDate }) =>
        moment(endDate).isAfter(moment())
      );
    case DushboardFilterMod.HISTORY:
      return requests.filter(({ endDate }) =>
        moment(endDate).isBefore(moment())
      );
    default:
      return requests;
  }
};

export const getRequestsForMonth = async (date: Moment) => {
  const allRequests = await getRequests({});

  return allRequests.filter(
    ({ endDate, startDate }) =>
      moment(endDate).isSame(date, 'month') ||
      moment(startDate).isSame(date, 'month')
  );
};

export const addNewRequest = async (request: IRequest) => {
  const allRequests = await getRequests({});
  const newRequests = [
    ...allRequests,
    {
      ...request,
      id: moment().unix(),
      actions: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
  ];
  localStorage.setItem('requests', JSON.stringify(newRequests));
  return request;
};
