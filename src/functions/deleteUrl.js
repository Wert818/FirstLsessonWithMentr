const deleteUrl = (id, url) => {
  return [...url.filter((idInArr) => +idInArr.id !== +id)];
};

export default deleteUrl;
