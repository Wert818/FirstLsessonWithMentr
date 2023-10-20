import React from "react";

const CountColumnComponent = (props) => {
  return (
    <div className="d-flex flex-row m-0">
      <div
        className="d-flex mx-1 mt-1 w-75 backgroundMain justify-content-center"
        style={{ borderRadius: 5 }}
      >
        Количество ключей
      </div>
      <div
        className="d-flex mx-1 mt-1 w-25 bg-light justify-content-center"
        style={{ borderRadius: 5 }}
      >
        {props.countColumn}
      </div>
    </div>
  );
};

export default CountColumnComponent;
