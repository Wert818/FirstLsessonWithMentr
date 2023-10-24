import ButtonsComponent from "./ButtonsComponent";
import LoadedComponent from "./LoadedComponent";
import ListComponent from "../body/ListComponent";
import { Divider } from "antd";

function MenuComponent(props) {
  return (
    <div className="d-flex m-0 justify-content-between h-100 flex-column gu-menu backgroundComponent">
      <div>
        <p className="text-center fw-bold fs-4">МЕНЮ</p>
        <ButtonsComponent
          setURLs={props.setURLs}
          urls={props.urls}
          setJSON={props.setJSON}
          setCountRow={props.setCountRow}
          setCountColumn={props.setCountColumn}
          JSON={props.JSON}
        />
        <Divider className="bg-white" />
        <ListComponent
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
      <Divider className="bg-white" />
      <LoadedComponent urls={props.urls} />
    </div>
  );
}

export default MenuComponent;
