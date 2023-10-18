interface IDates {
  dateFrom: string
  dateTo: string
}

export const getPastDate = (daysAgo: number, format: string = 'yyyy-mm-dd'): IDates => {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - daysAgo);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    if (format === "yyyy-mm-dd") {
      return `${year}-${month}-${day}`;
    } else if (format === "dd-mm-yyyy") {
      return `${day}-${month}-${year}`;
    } else {
      return date.toDateString();
    }
  };


  return {
    dateFrom: formatDate(pastDate),
    dateTo: formatDate(today)
  }
}
