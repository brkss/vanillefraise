import dayjs from "dayjs";

interface IData {
  intake: number;
  date: string;
}

export const mergeDates = (data: IData[]) => {
  const results: IData[] = [];

  for (let item of data) {
    const date = dayjs(item.date).format("MM/DD/YYYY");
    const index = results.findIndex((x) => x.date === date);
    if (index === -1) {
      results.push({ intake: item.intake, date: date });
    } else {
      results[index].intake += item.intake;
    }
  }
  return results;
};
