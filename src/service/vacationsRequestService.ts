import { MomentDateTimeFormat } from './../models/moment.models';
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

export const getRequestById = async (requestId: number) => {
  const allRequests = await getRequests({});
  return allRequests.find(({ id }) => requestId === id);
};

export const getRequestsForMonth = async (date: Moment) => {
  const allRequests = await getRequests({});

  return allRequests.filter(
    ({ endDate, startDate }) =>
      moment(endDate).isSame(date, 'month') ||
      moment(startDate).isSame(date, 'month')
  );
};

export const editRequestById = async (
  requestsId: number,
  request: IRequest
) => {
  await deleteRequestById(requestsId);
  return addNewRequest(request);
};

export const deleteRequestById = async (requestsId: number) => {
  const allRequests = await getRequests({});
  const newRequests = allRequests.filter(({ id }) => id !== requestsId);
  localStorage.setItem('requests', JSON.stringify(newRequests));
  return;
};

export const addNewRequest = async (request: IRequest) => {
  const allRequests = await getRequests({});
  const newRequests = [
    ...allRequests,
    {
      ...request,
      id: moment().unix(),
      actions: moment().format(MomentDateTimeFormat.SPAСE_FULL_FORMAT),
    },
  ];
  localStorage.setItem('requests', JSON.stringify(newRequests));
  return request;
};
