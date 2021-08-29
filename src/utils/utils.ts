export const calcRemainingTime = (start_time?: string, end_time?: string): number => {
  let start = start_time ?  new Date(start_time).getTime() : new Date().getTime();
  let end = end_time ?  new Date(end_time).getTime() : new Date().getTime();
  return (end - start) / 1000;
}