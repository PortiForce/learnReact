export const getPagesCount = (totalEntries, limit) => {
  return Math.ceil(totalEntries / limit);
};
