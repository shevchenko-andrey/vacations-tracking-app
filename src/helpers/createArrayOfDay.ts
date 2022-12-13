import { Dayjs } from 'dayjs';

export const createArrayOfDay = (startDate: Dayjs, amount: number): Dayjs[] => {
  const arrayOfDay = [...Array(amount - 1)].reduce(
    (acc: Dayjs[]) => {
      const nextDay = acc.at(-1)?.add(1, 'day');
      return [...acc, nextDay];
    },
    [startDate]
  );
  return arrayOfDay;
};
