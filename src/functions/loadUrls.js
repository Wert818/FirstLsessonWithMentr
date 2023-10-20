export const loadUrls = (key) => {
  //   localStorage.clear();
  const dataString = localStorage.getItem(key);
  const dataObject = JSON.parse(dataString);
  return dataObject;
};
