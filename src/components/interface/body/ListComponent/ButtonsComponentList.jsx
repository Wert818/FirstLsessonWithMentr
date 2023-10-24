import React, { useState } from "react";
// import addUrl from "../../../../functions/addUrl";
import deleteUrl from "../../../../functions/deleteUrl";
// import updateUrl from "../../../../functions/updateUrl";

const ButtonsComponentList = (props) => {
  console.log("ButtonComponent: ", props);
  const [message, setMessage] = useState("");

  const handlerAdd = () => {
    props.setIsShowModal(true);
    props.setIsUpdate(false);
  };

  const handlerDelete = async () => {
    const conf = window.confirm("Вы уверены, что хотите удалить данные URL");
    if (conf) {
      props.setURLs(deleteUrl(props.currentURL_Id, props.urls));
      props.setCurrentURL_Id("");
    }
  };

  const handlerChanges = () => {
    props.setIsShowModal(true);
    props.setIsUpdate(true);
    props.setSomething(
      (prev) =>
        (prev = props.urls.find((obj) => obj.id === props.currentURL_Id))
    );
    // updateUrl(props.currentURL_Id, props.urls.name, props.urls);
  };

  return (
    <div className="d-flex flex-column mx-1 mb-2 justify-content-between">
      <button className="btn btn-success" disabled={false} onClick={handlerAdd}>
        Добавить источник
      </button>
      <button
        className="btn btn-danger"
        disabled={+props.currentURL_Id === +-1 ? true : false}
        onClick={handlerDelete}>
        Удалить источник
      </button>
      <button
        className="btn btn-warning"
        disabled={+props.currentURL_Id === +-1 ? true : false}
        onClick={handlerChanges}>
        Изменить источник
      </button>
    </div>
  );
};

export default ButtonsComponentList;
