import ButtonsComponent from "./ButtonsComponent";
import LoadedComponent from "./LoadedComponent";

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
      </div>
      <LoadedComponent urls={props.urls} />
    </div>
  );
}

export default MenuComponent;
