import InfoComponent from "./InfoComponent";
// import ListComponent from "./ListComponent";

function BodyComponent(props) {
  // console.log("statesBodyC:", props);
  return (
    <div className="d-flex mx-1 flex-column justify-content w-100 flew-fill backgroundMain border border-info ">
      {/* <ListComponent
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
      /> */}

      <InfoComponent
        urls={props.urls}
        currentURL_Id={props.currentURL_Id}
        countColumn={props.countColumn}
        countRow={props.countRow}
        JSON={props.JSON}
        setCurrentURL_Id={props.setCurrentURL_Id}
        setJSON={props.setJSON}
      />
    </div>
  );
}

export default BodyComponent;
