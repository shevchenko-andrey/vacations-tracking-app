import moment from 'moment';
import { FilterMod } from '../screens/Dashboard/Dushboard.models';
import { IRequest } from './../models/request.models';

interface IRequestOptions {
  filter?: FilterMod;
}

export const getRequests = async ({ filter }: IRequestOptions) => {
  const data = localStorage.getItem('requests');
  if (!data) {
    return [];
  }
  const requests = JSON.parse(data) as IRequest[];

  switch (filter) {
    case FilterMod.ACTUAL:
      return requests.filter(({ endDate }) =>
        moment(endDate).isAfter(moment())
      );
    case FilterMod.HISTORY:
      return requests.filter(({ endDate }) =>
        moment(endDate).isBefore(moment())
      );
    default:
      return requests;
  }
};

export const addNewRequest = async (request: IRequest) => {
  const allRequests = await getRequests({});
  const newRequests = [
    ...allRequests,
    { ...request, id: moment(request.endDate).unix() },
  ];
  localStorage.setItem('requests', JSON.stringify(newRequests));
  return request;
};
