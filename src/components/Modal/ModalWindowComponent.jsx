import React, { useState } from "react";
import { Modal, Input } from "antd";
import addUrl from "../../functions/addUrl";
import updateUrl from "../../functions/updateUrl";

const ModalWindow = (props) => {
  console.log("MODAL: ", props);

  const [currentValue, setCurrentValue] = useState([]);

  console.log("MODAL_URLs: ", currentValue);

  const handlerSave = () => {
    // console.log("currentValueAfterClick: ", currentValue);
    // console.log("Clicked Save!");
    !props.isUpdate
      ? props.setURLs(addUrl(currentValue, props.urls))
      : props.setURLs(
          updateUrl(
            props.currentURL_Id,
            props.something.name,
            props.urls,
            props.something.url
          )
        );

    props.setIsShowModal(false);
    setCurrentValue([]);
  };

  const handlerCancel = () => {
    setCurrentValue([]);
    // console.log("currentValueAfterClick: ", currentValue);
    // console.log("Clicked CANCEL");
    props.setIsShowModal(false);
  };

  const handlerChange = (e) => {
    !props.isUpdate
      ? setCurrentValue((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }))
      : props.setSomething((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));

    console.log("TargetName: ", e.target.name);
  };

  return (
    <div>
      <Modal
        title={props.isUpdate ? " Changes source" : "Add source"}
        open={props.isShowModal}
        onOk={handlerSave}
        onCancel={handlerCancel}
        okText="Сохранить"
        cancelText="Отменить">
        <Input
          name="name"
          value={!props.isUpdate ? currentValue.name : props.something.name}
          onChange={handlerChange}
        />
        <Input
          name="url"
          value={!props.isUpdate ? currentValue.url : props.something.url}
          onChange={handlerChange}
        />
      </Modal>
    </div>
  );
};

export default ModalWindow;
