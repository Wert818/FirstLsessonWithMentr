import React from "react";
import { getFindData } from "../../../../functions/getFindData";

const URLComponent = (props) => {
  console.log("URLComponent:", props);
  const findElementUrl = getFindData(props.urls, props.currentURL_Id);
  return (
    <div className="d-flex flex-column m-0 justify-content-center">
      <p className="text-center m-0 fw-bold fs-4">Список источников данных</p>
      <div
        className="d-flex mx-1 mb-2 justify-content-center bg-light"
        style={{ borderRadius: 5 }}>
        {findElementUrl && findElementUrl.url !== ""
          ? findElementUrl.url
          : "Empty"}
      </div>
    </div>
  );
};

export default URLComponent;
