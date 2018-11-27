const getVisibleExpanses = (expanses, { text, sortBy, startDate, endDate }) => {
  return expanses.filter((expanse) => {
    const startDateMatch = typeof startDate !== 'number' || expanse.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expanse.endDate <= endDate;
    const textMatch = expanse.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

export default getVisibleExpanses;
