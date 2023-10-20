import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import MenuComponent from "./components/interface/menu/MenuComponent";
import BodyComponent from "./components/interface/body/BodyComponent";
import { useState } from "react";
import ModalWindowComponent from "./components/Modal/ModalWindowComponent";

// localStorage.clear();

// const dataUrls = [{
//   id: "1",
//   name: "url_1",
//   url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
// },
// {
//   id: "2",
//   name: "url_2",
//   url: "https://jsonplaceholder.typicode.com/comments",
// },
// {
//   id: "3",
//   name: "url_3",
//   url: "https://jsonplaceholder.typicode.com/photos",
// },
// {
//   id: "4",
//   name: "url_4",
//   url: "https://jsonplaceholder.typicode.com/todos",
// },
// {
//   id: "5",
//   name: "url_5",
//   url: "https://jsonplaceholder.typicode.com/users",
// }];

// localStorage.setItem('dataAboutUrls', JSON.stringify(dataUrls));
// const dataUrlsString = localStorage.getItem('dataAboutUrls');
// let dataUrlsObject = JSON.parse(dataUrlsString);

// console.log("dataUrlsObject:", JSON.parse(dataUrlsObject));

function App() {
  // console.log("data:", dataUrlsObject);

  const [urls, setURLs] = useState([]);
  const [currentURL_Id, setCurrentURL_Id] = useState(-1);
  const [countRow, setCountRow] = useState(0);
  const [countColumn, setCountColumn] = useState(0);
  const [JSON, setJSON] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [something, setSomething] = useState([]);

  return (
    <>
      <div className="d-flex vh-100 vw-100 flew-row m-0 backgroundMain">
        <MenuComponent
          setURLs={setURLs}
          urls={urls}
          setCountRow={setCountRow}
          JSON={JSON}
          setCountColumn={setCountColumn}
        />

        <BodyComponent
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          urls={urls}
          currentURL_Id={currentURL_Id}
          countRow={countRow}
          countColumn={countColumn}
          JSON={JSON}
          setCountRow={setCountRow}
          setCountColumn={setCountColumn}
          setCurrentURL_Id={setCurrentURL_Id}
          setURLs={setURLs}
          setJSON={setJSON}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          something={something}
          setSomething={setSomething}
        />

        <ModalWindowComponent
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          urls={urls}
          currentURL_Id={currentURL_Id}
          JSON={JSON}
          setCurrentURL_Id={setCurrentURL_Id}
          setURLs={setURLs}
          setJSON={setJSON}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          something={something}
          setSomething={setSomething}
        />
      </div>
    </>
  );
}

export default App;
