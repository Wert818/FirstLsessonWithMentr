const updateUrl = (id, name, urls, url) => {
  return [
    ...urls.map((obj) =>
      +obj.id === +id ? { ...obj, name: name, url: url } : obj
    ),
  ];
};

export default updateUrl;
