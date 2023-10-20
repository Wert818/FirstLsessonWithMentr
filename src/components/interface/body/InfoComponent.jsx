import React from "react";
import CountRowComponent from "./InfoComponent/CountRowComponent";
import CountColumnComponent from "./InfoComponent/CountColumnComponent";
import JSONComponent from "./InfoComponent/JSONComponent";

const InfoComponent = (props) => {
  // console.log("infoProps:", props);
  return (
    <div className="d-flex flex-column h-50 mt-2 backgroundComponent">
      <p className="text-center m-0 fw-bold fs-4">Информация</p>

      <CountRowComponent countRow={props.countRow} />

      <CountColumnComponent countColumn={props.countColumn} />

      <JSONComponent
        urls={props.urls}
        JSON={props.JSON}
        currentURL_Id={props.currentURL_Id}
        setJSON={props.setJSON}
        setCurrentURL_Id={props.setCurrentURL_Id}
        setCountRow={props.setCountRow}
        setCountColumn={props.setCountColumn}
      />
    </div>
  );
};

export default InfoComponent;
