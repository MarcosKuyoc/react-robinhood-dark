/* eslint-disable @typescript-eslint/no-explicit-any */

export function getValueMaximo<T>(data: T[], itemValue: keyof T): T | null {
  if (data) {
    const filterData = data.filter((item) => item[itemValue] !== null);
  
    return filterData.reduce((maxItem: any, item: T) => {
      if (maxItem === null) {
        return item;
      }
      return item[itemValue] !== null && item[itemValue] > maxItem[itemValue]
        ? item
        : maxItem;
    }, null);
  }
  return null;
}




// export const getValueMaximo = (data: any[], itemValue: string) => {
//   if (data) {
//     const filterData = data.filter((item: any) => item.latestEndOfDayOpenPrice !== null);
  
//     return filterData.reduce((maxStock: any, item: any) => {
//       if (maxStock === null) {
//         return item;
//       }
//       return item[itemValue] !== null && item[itemValue] > maxStock[itemValue]
//         ? item
//         : maxStock;
//     }, null);
//   }
// }
  