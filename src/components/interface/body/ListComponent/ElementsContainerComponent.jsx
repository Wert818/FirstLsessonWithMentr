import React from "react";
import ElementComponent from "./ElementComponent";

const ElementsContainerComponent = (props) => {
  console.log("propsElementsContainer:", props);

  const arrayUrls = props.urls ? props.urls : [];
  // console.log("arrayUrls:", arrayUrls.length);

  return (
    <div
      className="d-flex w-100 flex-column text-center overflow-auto"
      style={{ height: 100 }}>
      {arrayUrls.length !== 0
        ? arrayUrls.map((e) => (
            <ElementComponent
              text={e.name}
              key={e.id}
              id={e.id}
              currentId={props.currentURL_Id}
              setCurrentURL_Id={props.setCurrentURL_Id}
              setCountRow={props.setCountRow}
              setCountColumn={props.setCountColumn}
            />
          ))
        : "Empty"}
    </div>
  );
};

export default ElementsContainerComponent;
