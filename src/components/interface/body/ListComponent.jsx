import React from "react";
import URLComponent from "./ListComponent/URLComponent";
import ElementsContainerComponent from "./ListComponent/ElementsContainerComponent";
import ButtonsComponentList from "./ListComponent/ButtonsComponentList";

const ListComponent = (props) => {
  // console.log("propsListComponent:", props);
  return (
    <div className="d-flex flex-column h-50 align-items-stretch backgroundComponent">
      <URLComponent currentURL_Id={props.currentURL_Id} urls={props.urls} />
      {(props.urls ? props.urls.length : "") !== 0 ? (
        <div>
          <ElementsContainerComponent
            urls={props.urls}
            currentURL_Id={props.currentURL_Id}
            setCurrentURL_Id={props.setCurrentURL_Id}
            setCountRow={props.setCountRow}
            setCountColumn={props.setCountColumn}
          />

          <ButtonsComponentList
            urls={props.urls}
            currentURL_Id={props.currentURL_Id}
            setCurrentURL_Id={props.setCurrentURL_Id}
            setCountRow={props.setCountRow}
            setCountColumn={props.setCountColumn}
            isShowModal={props.isShowModal}
            setIsShowModal={props.setIsShowModal}
            JSON={props.JSON}
            setURLs={props.setURLs}
            setJSON={props.setJSON}
            isUpdate={props.isUpdate}
            setIsUpdate={props.setIsUpdate}
            something={props.something}
            setSomething={props.setSomething}
          />
        </div>
      ) : (
        <p className="text-uppercase text-light fs-1 fw-bold text-center">
          push button load!
        </p>
      )}
    </div>
  );
};

export default ListComponent;
