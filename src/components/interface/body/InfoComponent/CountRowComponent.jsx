import React from "react";

const CountRowComponent = (props) => {
  // console.log("CountRowComponent: ", props);

  return (
    <div className="d-flex flex-row justify-content-between">
      <div
        className="d-flex mx-1 w-75 justify-content-center backgroundMain"
        style={{ borderRadius: 5 }}>
        Количество символов
      </div>
      <div
        className="d-flex w-25 mx-1 bg-light justify-content-center"
        style={{ borderRadius: 5 }}>
        {props.countRow !== 2 ? props.countRow : 0}
      </div>
    </div>
  );
};

export default CountRowComponent;
