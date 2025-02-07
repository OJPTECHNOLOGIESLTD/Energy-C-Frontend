const formatDate = (date: string | Date): string => {
  if (!date) return '';
  
  let d: Date;
  try {
    d = typeof date === 'string' ? new Date(date) : date;
    
    if (isNaN(d.getTime())) {
      return '';
    }
  } catch (error) {
    return '';
  }
  
  const day = d.getDate();
  const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
                (day % 10 === 2 && day !== 12) ? 'nd' :
                (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
  
  const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 
                 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
  const month = months[d.getMonth()];
  
  const year = d.getFullYear();

  return `${day}${suffix} ${month} ${year}`;
};

export default formatDate;

