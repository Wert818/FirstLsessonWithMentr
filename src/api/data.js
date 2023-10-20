const data = {
    urls: [{
        id: "1",
        name: "url_1",
        url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      },
      {
        id: "2",
        name: "url_2",
        url: "https://jsonplaceholder.typicode.com/comments",
      },
      {
        id: "3",
        name: "url_3",
        url: "https://jsonplaceholder.typicode.com/photos",
      },
      {
        id: "4",
        name: "url_4",
        url: "https://jsonplaceholder.typicode.com/todos",
      },
      {
        id: "5",
        name: "url_5",
        url: "https://jsonplaceholder.typicode.com/users",
      }],
    loadedJSON: {},
    countRows: 5,
    countColumns: 0,
    statusLoadedJSON: false,
    currentURL_ID: -1,
  };

  export default data;