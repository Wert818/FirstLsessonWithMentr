export const getFindData = (data, currentId) => {
  return data.find((url) => +url.id === +currentId);
};
