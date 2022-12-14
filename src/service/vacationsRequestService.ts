import dayjs, { Dayjs } from 'dayjs';
import { DashboardFilterMod } from '../screens/Dashboard/Dashboard.models';
import { IRequest, IRequestFullData } from './../models/request.models';

interface IRequestOptions {
  filter?: DashboardFilterMod;
}

export const getRequests = async ({ filter }: IRequestOptions) => {
  const data = localStorage.getItem('requests');
  if (!data) {
    return [];
  }
  const requests = JSON.parse(data) as IRequestFullData[];

  switch (filter) {
    case DashboardFilterMod.ACTUAL:
      return requests.filter(({ endDate }) =>
        dayjs(endDate).isAfter(dayjs().subtract(1, 'day'))
      );
    case DashboardFilterMod.HISTORY:
      return requests.filter(({ endDate }) => dayjs(endDate).isBefore(dayjs()));
    default:
      return requests;
  }
};

export const getRequestById = async (requestId: number) => {
  const allRequests = await getRequests({});
  return allRequests.find(({ id }) => requestId === id);
};

export const getRequestsForMonth = async (date: Dayjs) => {
  const allRequests = await getRequests({});

  return allRequests.filter(
    ({ endDate, startDate }) =>
      dayjs(endDate).isSame(date, 'month') ||
      dayjs(startDate).isSame(date, 'month')
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
      id: dayjs().unix(),
      action: dayjs(),
    },
  ];
  localStorage.setItem('requests', JSON.stringify(newRequests));
  return request;
};
