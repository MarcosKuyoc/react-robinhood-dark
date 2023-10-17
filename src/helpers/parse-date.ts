export const dateFormat = (date: Date | string): string => {

  if (date instanceof Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
  
    return `${year}-${month}-${day}`;
  }

  if (typeof date === 'string') {
    const parseDate =  date.substring(0,10);
    return parseDate;
  }

  return date;
}
