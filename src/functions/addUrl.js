const addUrl = (url, urls) => {
  const nextId = urls.reduce(
    (acc, currentValue) =>
      acc.id >= currentValue.id ? acc.id : currentValue.id,
    0
  );
  // console.log(nextId);
  const newUrl = { id: String(+nextId + 1), name: url.name, url: url.url };
  return [...urls, newUrl];
};

export default addUrl;
